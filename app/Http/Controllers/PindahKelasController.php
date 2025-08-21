<?php

namespace App\Http\Controllers;

use App\Models\Alumni;
use App\Models\Kelas;
use App\Models\Siswa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PindahKelasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $alumnis = Alumni::orderBy('id', 'desc')->paginate(request()->query('perPage') ?? 10);

        return Inertia::render('Alumni/Index', [
            'alumnis' => $alumnis,
            'perPage' => request()->query('perPage') ?? 10
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $kelas = Kelas::with('siswa')->get();

        return Inertia::render('Alumni/Add', [
            'kelas' => $kelas
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'id_ke_kelas' => 'required|string',
            'data_fe' => 'required|array',
        ]);

        $allSiswaIds = collect($request->data_fe)
            ->pluck('siswa')
            ->flatten(1)
            ->pluck('id')
            ->toArray();

        if ($request->id_ke_kelas === "alumni") {
            $siswaList = Siswa::whereIn('id', $allSiswaIds)->get();

            $alumniData = $siswaList->map(function ($siswa) {
                return [
                    'nis'  => $siswa->nis,
                    'nama_siswa' => $siswa->nama_siswa,
                    'nama_ortu' => $siswa->nama_ortu,
                    'no_ortu' => $siswa->no_ortu,
                    'tahun_masuk' => $siswa->tahun_masuk
                ];
            })->toArray();

            Alumni::insert($alumniData);

            Siswa::whereIn('id', $allSiswaIds)->delete();

        } else {
            Siswa::whereIn('id', $allSiswaIds)
                ->update(['id_kelas' => $request->id_ke_kelas]);
        }

        return to_route('pindah-kelas.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
