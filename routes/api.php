<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\DeviceTokenController;
use App\Http\Controllers\API\RekapAbsenController;
use App\Http\Controllers\RekapGuruController;
use App\Http\Controllers\RekapSiswaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('auth')->middleware('api')->group(function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:api');
    Route::post('ganti-password', [AuthController::class, 'gantiPassword'])->middleware('auth:api');
});

Route::middleware(['api', 'auth:api'])->group(function () {
    Route::get('ping', function () {
        return response()->json(["message" => "ping!"]);
    });
    Route::get('rekap-absen', [RekapAbsenController::class, 'rekapAbsen']);
    Route::get('rekap-absen-today', [RekapAbsenController::class, 'rekapAbsenToday']);
    Route::post('update-device-token', [DeviceTokenController::class, 'updateDeviceToken']);
});

Route::post('rekap-guru/insert-absen', [RekapGuruController::class, 'insertAbsenFromIot']);
Route::post('rekap-siswa/insert-absen', [RekapSiswaController::class, 'insertAbsenFromIot']);
