<?php

namespace App\Http\Controllers;

use App\Exports\RekapSiswaExport;
use App\Helpers\SendNotificationFCM;
use App\Models\RekapSiswa;
use App\Http\Requests\StoreRekapSiswaRequest;
use App\Http\Requests\UpdateRekapSiswaRequest;
use App\Models\Kelas;
use App\Models\Setting;
use App\Models\Siswa;
use Carbon\Carbon;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class RekapSiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $dates = request()->query('dates');
        $kelas_query = request()->query('kelas');
        $kelas = Kelas::all();

        if ($dates && count($dates) == 2) {
            $startDate = $dates[0] . ' 00:00:00';
            $endDate = $dates[1] . ' 23:59:59';
        }

        $query = RekapSiswa::with(['siswa' => function($q) {
                $q->select('id', 'nama_siswa', 'id_kelas');
            }])
            ->select(
                'id_siswa',
                'absen_masuk',
                'absen_pulang',
                'status',
                DB::raw('DATE(created_at) as created_at')
            );

        if (!empty($kelas_query)) {
            $query->whereHas('siswa', function ($q) use ($kelas_query) {
                $q->where('id_kelas', $kelas_query);
            });
        }

        if (!empty($dates) && count($dates) == 2) {
            $query->whereBetween('created_at', [$startDate, $endDate]);
        }

        $rekap_siswa = $query->paginate(request()->query('perPage') ?? 10);

        return Inertia::render('RekapSiswa/Index', [
            'rekapSiswa' => $rekap_siswa,
            'kelas' => $kelas,
            'perPage' => request()->query('perPage') ?? 10
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $siswa = Siswa::all();
        return Inertia::render('RekapSiswa/Add', [
            'siswa' => $siswa
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRekapSiswaRequest $request)
    {
        $timeNow = Carbon::now('Asia/Jakarta')->format('H:i');
        $data = $request->validated();
        $data['created_at'] = $request->created_at." ".$timeNow;
        RekapSiswa::create($data);

        return to_route('rekap-siswa.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(RekapSiswa $rekapSiswa)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(RekapSiswa $rekapSiswa)
    {
        $data = RekapSiswa::find($rekapSiswa->id);

        return Inertia::render("RekapSiswa/Edit", [
            'rekapSiswa' => $data
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRekapSiswaRequest $request, RekapSiswa $rekapSiswa)
    {
        $data = $request->validated();

        RekapSiswa::where('id', $rekapSiswa->id)->update($data);

        return to_route('rekap-siswa.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $idFix = explode(',', $id);

        RekapSiswa::destroy($idFix);

        return to_route('rekap-siswa.index');
    }

    public function insertAbsenFromIot(Request $req) {

        $timeNow = Carbon::now('Asia/Jakarta')->format('H:i');
        $dateNow = Carbon::now('Asia/Jakarta')->format('Y-m-d');

        $data = Siswa::where('no_kartu', $req->no_kartu)->first();

        if($data == null) {
            return response()->json([
                "message" => "Student Not Found!"
            ]);
        }

        $setting_waktu = Setting::first();

        $data_absen = RekapSiswa::where('id_siswa', $data->id)->whereDate('created_at', $dateNow)->first();

        if($timeNow > '00:00' && $timeNow <= $setting_waktu->absen_masuk) {

            if($data_absen == null) {

                RekapSiswa::create([
                    'id_siswa' => $data->id,
                    'absen_masuk' => $timeNow,
                    'absen_pulang' => null,
                    'status' => 'Belum Hadir',
                    'created_at' => Carbon::now('Asia/Jakarta')->format('Y-m-d H:i:s'),
                ]);

            }

        }else if ($timeNow > $setting_waktu->absen_masuk && $timeNow < $setting_waktu->absen_pulang){
            
            if($data_absen == null) {

                RekapSiswa::create([
                    'id_siswa' => $data->id,
                    'absen_masuk' => $timeNow,
                    'absen_pulang' => null,
                    'status' => 'Belum Hadir dan Terlambat',
                    'created_at' => Carbon::now('Asia/Jakarta')->format('Y-m-d H:i:s'),
                ]);
            }

        }else if ($timeNow >= $setting_waktu->absen_pulang && $timeNow < '23:59') {
            
            if($data_absen != null) {

                if($data_absen->absen_masuk > '00:00' && $data_absen->absen_masuk <= $setting_waktu->absen_masuk) {

                    RekapSiswa::where('id', $data_absen->id)->update([
                        'absen_pulang' => $timeNow,
                        'status' => 'Hadir',
                        'updated_at' => Carbon::now('Asia/Jakarta')->format('Y-m-d H:i:s')
                    ]);

                }else{
                    
                    if($data_absen->absen_masuk) {
                        DB::table('rekap_siswa')->where('id', $data_absen->id)->update([
                            'absen_pulang' => $timeNow,
                            'status' => 'Hadir tapi Terlambat',
                            'updated_at' => Carbon::now('Asia/Jakarta')->format('Y-m-d H:i:s')
                        ]);
                    }else{
                        Log::info('Anda tidak absen pagi');
                    }

                }

            }else{

                RekapSiswa::create([
                    'id_siswa' => $data->id,
                    'absen_masuk' => null,
                    'absen_pulang' => $timeNow,
                    'status' => 'Hadir Tapi Tidak Absen Masuk',
                    'created_at' => Carbon::now('Asia/Jakarta')->format('Y-m-d H:i:s'),
                ]);

            }

        }

        SendNotificationFCM::SendNotificationToSudents($timeNow, $data, $dateNow, $setting_waktu);
    }

    public function exportExcel(Request $req) {

        return Excel::download(new RekapSiswaExport($req->query('kelas'), $req->query('dates')), Carbon::now('Asia/Jakarta')->format('Y-m-d')." Rekap Absen Siswa ".$req->query('kelas').".xlsx");

    }
}
