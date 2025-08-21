<?php

namespace App\Http\Controllers;

use App\Models\KontrakGuru;
use App\Http\Requests\StoreKontrakGuruRequest;
use App\Http\Requests\UpdateKontrakGuruRequest;
use Inertia\Inertia;

class KontrakGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $kontrak_guru = KontrakGuru::all(); 

        return Inertia::render('KontrakGuru/Index', [
            'kontrakGuru' => $kontrak_guru,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('KontrakGuru/Add');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreKontrakGuruRequest $request)
    {
        $data = $request->validated();
        KontrakGuru::create($data);

        return to_route('kontrak-guru.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(KontrakGuru $kontrakGuru)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(KontrakGuru $kontrakGuru)
    {
        $data = KontrakGuru::find($kontrakGuru)->first();

        return Inertia::render("KontrakGuru/Edit", [
            'kontrakGuru' => $data
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateKontrakGuruRequest $request, KontrakGuru $kontrakGuru)
    {
        $data = $request->validated();

        KontrakGuru::where('id', $kontrakGuru->id)->update($data);

        return to_route('kontrak-guru.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $idFix = explode(',', $id);

        KontrakGuru::destroy($idFix);

        return to_route('kontrak-guru.index');
    }
}
