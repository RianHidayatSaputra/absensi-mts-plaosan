<?php

namespace App\Http\Controllers;

use App\Exports\TemplateImportSiswa;
use App\Models\Siswa;
use App\Http\Requests\StoreSiswaRequest;
use App\Http\Requests\UpdateSiswaRequest;
use App\Imports\SiswaImport;
use App\Models\Kelas;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Excel as ExcelExcel;
use Maatwebsite\Excel\Facades\Excel;

class SiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $siswa = Siswa::with('kelas')->paginate(request()->query('perPage') ?? 10); 
        // $siswa = Siswa::with('kelas')
        //         ->select('siswa.id as id', 'siswa.nama_siswa', 'siswa.nis', 'kelas.nama_kelas', 'siswa.nama_ortu', 'siswa.no_ortu')
        //         ->paginate(request()
        //         ->query('perPage') ?? 10); 
// dd($siswa);
        return Inertia::render('Siswa/Index', [
            'siswa' => $siswa,
            'perPage' => request()->query('perPage') ?? 10
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $kelas = Kelas::select('id', 'nama_kelas')->get();
        return Inertia::render('Siswa/Add', [
            'kelas' => $kelas
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSiswaRequest $request)
    {
        $data = $request->validated();
        Siswa::create($data);

        return to_route('siswa.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Siswa $siswa)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Siswa $siswa)
    {
        $data = Siswa::find($siswa->id);
        $kelas = Kelas::select('id', 'nama_kelas')->get();

        return Inertia::render("Siswa/Edit", [
            'siswa' => $data,
            'kelas' => $kelas,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSiswaRequest $request, Siswa $siswa)
    {
        $data = $request->validated();

        Siswa::where('id', $siswa->id)->update($data);

        return to_route('siswa.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $idFix = explode(',', $id);

        Siswa::destroy($idFix);

        return to_route('siswa.index');
    }

    public function importSiswa(Request $request) {
        $file = $request->file('file');

        Excel::import(new SiswaImport, $file->getPathname(), null, ExcelExcel::XLSX);

        return back();
    }

    public function downloadTemplateSiswa(){
        return Excel::download(new TemplateImportSiswa, 'Template Import Siswa.xlsx');
    }
}
