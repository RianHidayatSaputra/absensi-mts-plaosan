<?php

use App\Http\Controllers\RekapGuruController;
use App\Http\Controllers\RekapSiswaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('rekap-guru/insert-absen', [RekapGuruController::class, 'insertAbsenFromIot']);
Route::post('rekap-siswa/insert-absen', [RekapSiswaController::class, 'insertAbsenFromIot']);
