<?php

namespace App\Http\Controllers;

use App\Models\Kelas;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KelasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $kelas = Kelas::paginate(request()->query('perPage') ?? 10); 

        return Inertia::render('Kelas/Index', [
            'kelas' => $kelas,
            'perPage' => request()->query('perPage') ?? 10
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Kelas/Add');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nama_kelas' => 'required'
        ]);

        Kelas::create([
            'nama_kelas' => $request->nama_kelas,
        ]);

        return to_route('kelas.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Kelas $kelas)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $data = Kelas::where('id', $id)->first();

        return Inertia::render("Kelas/Edit", [
            'kelas' => $data,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'nama_kelas' => 'required'
        ]);

        Kelas::where('id', $id)->update([
            'nama_kelas' => $request->nama_kelas
        ]);

        return to_route('kelas.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Kelas $kelas)
    {
        Kelas::destroy($kelas);

        return to_route('kelas.index');
    }
}
