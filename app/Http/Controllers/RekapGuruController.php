<?php

namespace App\Http\Controllers;

use App\Exports\RekapGuruExceptGuruExport;
use App\Exports\RekapGuruExport;
use App\Helpers\SendMessageWhatsapp;
use App\Models\RekapGuru;
use App\Http\Requests\StoreRekapGuruRequest;
use App\Http\Requests\UpdateRekapGuruRequest;
use App\Models\Guru;
use App\Models\HariLibur;
use App\Models\Setting;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class RekapGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $rekap_guru = [];

        $guru = Guru::where('nama', Auth::user()->name)->first();
        $gurus = Guru::all();

        if(Auth::user()->role == 'admin') {
            $rekap_guru = RekapGuru::with('guru')->paginate(request()->query('perPage') ?? 10); 
        }else{
            $rekap_guru = RekapGuru::with('guru')->where('id_guru', $guru->id)->paginate(request()->query('perPage') ?? 10);
        }

        return Inertia::render('RekapGuru/Index', [
            'rekapGuru' => $rekap_guru,
            'perPage' => request()->query('perPage') ?? 10,
            'gurus' => $gurus,
        ]);
    }

    public function semuaGuruKhususBendahara() {
        $rekap_guru = RekapGuru::with('guru')->paginate(request()->query('perPage') ?? 10); 

        return Inertia::render('RekapGuru/Index', [
            'rekapGuru' => $rekap_guru,
            'perPage' => request()->query('perPage') ?? 10,
            'totalRekapGuru' => RekapGuru::count()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $guru = Guru::all();

        return Inertia::render('RekapGuru/Add', [
            "guru" => $guru
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRekapGuruRequest $request)
    {
        $timeNow = Carbon::now('Asia/Jakarta')->format('H:i');
        $data = $request->validated();
        $data['created_at'] = $request->created_at." ".$timeNow;

        RekapGuru::create($data);

        return to_route('rekap-guru.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(RekapGuru $rekapGuru)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(RekapGuru $rekapGuru)
    {
        $data = RekapGuru::find($rekapGuru->id);
        $gurus = Guru::all();

        return Inertia::render("RekapGuru/Edit", [
            'rekapGuru' => $data,
            "gurus" => $gurus
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRekapGuruRequest $request, RekapGuru $rekapGuru)
    {
        $data = $request->validated();
        $data['absen_masuk']= $request->absen_masuk;
        $data['absen_pulang'] = $request->absen_pulang;

        RekapGuru::where('id', $rekapGuru->id)->update($data);

        return to_route('rekap-guru.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $idFix = explode(',', $id);

        RekapGuru::destroy($idFix);

        return to_route('rekap-guru.index');
    }

    public function insertAbsenFromIot(Request $req) {

        $timeNow = Carbon::now('Asia/Jakarta')->format('H:i');
        $dateNow = Carbon::now('Asia/Jakarta')->format('Y-m-d');
        // dd(env('API_WHATSAPP_KEY'));

        $data = Guru::where('no_kartu', $req->no_kartu)->first();

        if($data == null) {
            return response()->json([
                "message" => "Teacher Not Found!"
            ]);
        }

        $setting_waktu = Setting::first();

        $data_absen = RekapGuru::where('id_guru', $data->id)->whereDate('created_at', $dateNow)->first();

        if($timeNow > '05:00' && $timeNow <= $setting_waktu->absen_masuk) {

            if($data_absen == null) {

                RekapGuru::create([
                    'id_guru' => $data->id,
                    'absen_masuk' => $timeNow,
                    'absen_pulang' => null,
                    'status' => 'Belum Hadir',
                    'created_at' => Carbon::now('Asia/Jakarta')->format('Y-m-d H:i:s'),
                ]);

            }

        }else if ($timeNow > $setting_waktu->absen_masuk && $timeNow < $setting_waktu->absen_pulang){
            
            if($data_absen == null) {

                RekapGuru::create([
                    'id_guru' => $data->id,
                    'absen_masuk' => $timeNow,
                    'absen_pulang' => null,
                    'status' => 'Belum Hadir dan Terlambat',
                    'created_at' => Carbon::now('Asia/Jakarta')->format('Y-m-d H:i:s'),
                ]);
            }

        }else if ($timeNow >= $setting_waktu->absen_pulang && $timeNow < '22:00') {
            
            if($data_absen != null) {

                if($data_absen->absen_masuk > '05:00' && $data_absen->absen_masuk <= $setting_waktu->absen_masuk) {

                    RekapGuru::where('id', $data_absen->id)->update([
                        'absen_pulang' => $timeNow,
                        'status' => 'Hadir',
                        'updated_at' => Carbon::now('Asia/Jakarta')->format('Y-m-d H:i:s')
                    ]);

                }else{

                    if($data_absen->absen_masuk) {
                        DB::table('rekap_guru')->where('id', $data_absen->id)->update([
                            'absen_pulang' => $timeNow,
                            'status' => 'Hadir tapi Terlambat',
                            'updated_at' => Carbon::now('Asia/Jakarta')->format('Y-m-d H:i:s')
                        ]);
                    }else{
                        Log::info('Anda tidak absen pagi');
                    }

                }

            }else{

                RekapGuru::create([
                    'id_guru' => $data->id,
                    'absen_masuk' => null,
                    'absen_pulang' => $timeNow,
                    'status' => 'Hadir Tapi Tidak Absen Masuk',
                    'created_at' => Carbon::now('Asia/Jakarta')->format('Y-m-d H:i:s'),
                ]);

            }

        }

        SendMessageWhatsapp::SendMessageWhatsappToTeachers($timeNow, $data, $dateNow, $setting_waktu);

        // return response()->json([
        //     "wa key" => env("API_WHATSAPP_KEY")
        // ]);
        
    }

    public function exportExcel() {

        $nama = strtolower(Auth::user()->name);

        return Excel::download(new RekapGuruExport, Carbon::now('Asia/Jakarta')->format('Y-m-d')." Rekapan Absen ".$nama.".xlsx");

    }
    
    public function exportExcelExceptGuru() {

        return Excel::download(new RekapGuruExceptGuruExport, Carbon::now('Asia/Jakarta')->format('Y-m-d')." rekap-absen-semua-guru.xlsx");

    }
}

