<?php

namespace App\Http\Controllers;

use App\Helpers\SendMessageWhatsapp;
use App\Models\Spp;
use App\Http\Requests\StoreSppRequest;
use App\Http\Requests\UpdateSppRequest;
use App\Imports\SppImport;
use App\Models\Siswa;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Maatwebsite\Excel\Excel as ExcelExcel;
use Maatwebsite\Excel\Facades\Excel;

class SppController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    protected $date_now;

    public function __construct() {
        $this->date_now = Carbon::now('Asia/Jakarta')->locale('id')->translatedFormat('d F Y');
    } 

    public function index()
    {

        $spp = Spp::with('siswa')->paginate(request()->query('perPage') ?? 10);
        $count_spp = Spp::count();
        // dd($spp);
        return Inertia::render('Spp/Index', [
            'spp' => $spp,
            'count_spp' => $count_spp,
            'perPage' => request()->query('perPage') ?? 10
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $siswa = Siswa::all();

        return Inertia::render('Spp/Add', [
            "siswas" => $siswa
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSppRequest $request)
    {
        $data = $request->validated();
        $spp = json_decode($data['data_spp']);
        $bulanYangLunas = [];

        foreach ($spp as $kelas) {
            foreach ($kelas as $tingkat => $bulanData) {
                foreach ($bulanData as $bulanStatus) {
                    foreach ($bulanStatus as $bulan => $status) {
                        if ($status === 'lunas') {
                            $bulanYangLunas[$tingkat][] = $bulan;
                        }
                    }
                }
            }
        }

        $data_siswa = Siswa::select('no_ortu', 'nama_siswa', 'kelas')->where('id', $request->id_siswa)->first();

        $pesan = "==== *INFORMASI PEMBAYARAN* ==== \n\nAnanda *$data_siswa->nama_siswa* dari rombel *$data_siswa->kelas* telah melakukan pembayaran SPP di";

        foreach ($bulanYangLunas as $tingkat => $bulans) {

            $bulanList = implode(", ", array_map(function ($bulan) use ($data) {
                return "$bulan sebesar Rp." . number_format($data['nominal_spp'], 0, ',', '.');
            }, $bulans));
            
            $pesan .= " bulan $bulanList pada kelas $tingkat,";
        }

        $pesan = rtrim($pesan, ',') . ".\nAtas kepercayaan dan kerjasamanya kami sampaikan terimakasih.\n\n                      *Jepara, $this->date_now* \n\n *#wikramauntukindonesia*";

        SendMessageWhatsapp::SendMessageWhatsappPaidSpp($data_siswa->no_ortu, $pesan);

        Spp::create($data);

        return to_route('spp.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Spp $spp)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Spp $spp)
    {
        $data = Spp::with('siswa')->find($spp->id);
        $siswa = Siswa::all();

        return Inertia::render("Spp/Edit", [
            'spp' => $data,
            'siswas' => $siswa,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSppRequest $request, Spp $spp)
    {

        $data = $request->validated();
        $data['updated_at'] = Carbon::now('Asia/Jakarta')->format('Y-m-d H:i:s');

        $data_spp_lama = Spp::select('data_spp')->where('id', $spp->id)->first();

        $sppLama = json_decode($data_spp_lama->data_spp, true);
        $sppBaru = json_decode($data['data_spp']);

        $bulanYangLunas = [];

        foreach ($sppBaru as $kelasIndex => $kelasBaru) {
            foreach ($kelasBaru as $tingkat => $bulanDataBaru) {
                foreach ($bulanDataBaru as $bulanStatusBaru) {
                    foreach ($bulanStatusBaru as $bulan => $statusBaru) {

                        $statusLama = $sppLama[$kelasIndex][$tingkat][0][$bulan] ?? null;

                        if ($statusBaru === 'lunas' && $statusLama !== 'lunas') {
                            $bulanYangLunas[$tingkat][] = $bulan;
                        }

                    }
                }
            }
        }

        $data_siswa = Siswa::select('no_ortu', 'nama_siswa', 'kelas')->where('id', $request->id_siswa)->first();

        $pesan = "==== *INFORMASI PEMBAYARAN* ==== \n\nAnanda *$data_siswa->nama_siswa* dari rombel *$data_siswa->kelas* telah melakukan pembayaran SPP di";

        foreach ($bulanYangLunas as $tingkat => $bulans) {

            $bulanList = implode(", ", array_map(function ($bulan) use ($data) {
                return "$bulan sebesar Rp." . number_format($data['nominal_spp'], 0, ',', '.');
            }, $bulans));
            
            $pesan .= " bulan $bulanList pada kelas $tingkat,";
        }

        $pesan = rtrim($pesan, ',') . ".\nAtas kepercayaan dan kerjasamanya kami sampaikan terimakasih.\n\n                      *Jepara, $this->date_now* \n\n *#wikramauntukindonesia*";

        SendMessageWhatsapp::SendMessageWhatsappPaidSpp($data_siswa->no_ortu, $pesan);

        Spp::where('id', $spp->id)->update($data);

        return to_route('spp.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $idFix = explode(',', $id);

        Spp::destroy($idFix);

        return to_route('spp.index');
    }

    public function importSpp(Request $request) {
        $file = $request->file('file')[0];

        // dd($file->getPathname());
        Excel::import(new SppImport, $file->getPathname(), null, ExcelExcel::CSV);

        return back();
    }
}
