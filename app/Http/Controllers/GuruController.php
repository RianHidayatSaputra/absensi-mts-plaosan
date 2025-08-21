<?php

namespace App\Http\Controllers;

use App\Exports\TemplateImportGuru;
use App\Models\Guru;
use App\Http\Requests\StoreGuruRequest;
use App\Http\Requests\UpdateGuruRequest;
use App\Imports\GuruImport;
use App\Models\KontrakGuru;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Maatwebsite\Excel\Excel as ExcelExcel;
use Maatwebsite\Excel\Facades\Excel;

class GuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $guru = Guru::paginate(request()->query('perPage') ?? 10); 

        return Inertia::render('Guru/Index', [
            'guru' => $guru,
            'perPage' => request()->query('perPage') ?? 10
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $kontrak_guru = KontrakGuru::all();

        return Inertia::render('Guru/Add', [
            "kontrakGuru" => $kontrak_guru
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreGuruRequest $request)
    {
        $kontrak_guru = implode(",", $request->kontrak_guru);

        Guru::create([
            'nama' => $request->nama,
            'nuptk' => $request->nuptk,
            'jabatan' => $request->jabatan,
            'status_kepegawaian' => $request->status_kepegawaian,
            'alamat' => $request->alamat,
            'kontrak_guru' => $kontrak_guru,
            'no_kartu' => $request->no_kartu,
            'no_wa' => $request->no_wa,
        ]);

        return to_route('guru.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Guru $guru)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Guru $guru)
    {
        $data = Guru::find($guru)->first();
        $kontrak_guru = KontrakGuru::all();

        return Inertia::render("Guru/Edit", [
            'guru' => $data,
            'kontrakGuru' => $kontrak_guru,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateGuruRequest $request, Guru $guru)
    {
        
        $inputKontrakGuru = $request->get('kontrak_guru');

        if(count($inputKontrakGuru) > 0) {
            if ($inputKontrakGuru[0] == 'null') {

                array_shift($inputKontrakGuru);
    
            }
        }
        
        $kontrak_guru = implode(",", $inputKontrakGuru);

        Guru::where('id', $guru->id)->update([
            'nama' => $request->nama,
            'nuptk' => $request->nuptk,
            'jabatan' => $request->jabatan,
            'status_kepegawaian' => $request->status_kepegawaian,
            'alamat' => $request->alamat,
            'kontrak_guru' => $kontrak_guru,
            'no_kartu' => $request->no_kartu,
            'no_wa' => $request->no_wa,
        ]);

        return to_route('guru.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $idFix = explode(',', $id);

        Guru::destroy($idFix);

        return to_route('guru.index');
    }

    public function importGuru(Request $request) {
        $file = $request->file('file');

        Excel::import(new GuruImport, $file->getPathname(), null, ExcelExcel::XLSX);

        return back();
    }

    public function downloadTemplateGuru(){
        return Excel::download(new TemplateImportGuru, 'Template Import Guru.xlsx');
    }
}
