<?php

namespace App\Http\Controllers;

use App\Models\HariLibur;
use App\Http\Requests\StoreHariLiburRequest;
use App\Http\Requests\UpdateHariLiburRequest;
use Inertia\Inertia;

class HariLiburController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $hari_libur = HariLibur::paginate(request()->query('perPage') ?? 10); 

        return Inertia::render('HariLibur/Index', [
            'hariLibur' => $hari_libur,
            'pag' => request()->query('perPage')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('HariLibur/Add');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreHariLiburRequest $request)
    {
        $data = $request->validated();
        HariLibur::create($data);

        return to_route('hari-libur.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(HariLibur $hariLibur)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(HariLibur $hariLibur)
    {
        $data = HariLibur::find($hariLibur->id);

        return Inertia::render("HariLibur/Edit", [
            'hariLibur' => $data
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateHariLiburRequest $request, HariLibur $hariLibur)
    {
        $data = $request->validated();
        HariLibur::where('id', $hariLibur->id)->update($data);

        return to_route('hari-libur.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $idFix = explode(',', $id);

        HariLibur::destroy($idFix);

        return to_route('hari-libur.index');
    }
}
