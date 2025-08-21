<?php

// use App\Http\Controllers\ProfileController;

use App\Http\Controllers\BroadcastController;
use App\Http\Controllers\BrutcastController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\GuruController;
use App\Http\Controllers\HariLiburController;
use App\Http\Controllers\KelasController;
use App\Http\Controllers\KontrakGuruController;
use App\Http\Controllers\PindahKelasController;
use App\Http\Controllers\RekapGuruController;
use App\Http\Controllers\RekapSiswaController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\SiswaController;
use App\Http\Controllers\SppController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect('/', '/dashboard');

// CUSTOM ROUTE
Route::get('export-excel/rekap-guru', [RekapGuruController::class, 'exportExcel'])->name('export-excel/rekap-guru');
Route::get('export-excel/rekap-siswa', [RekapSiswaController::class, 'exportExcel'])->name('export-excel.rekap-siswa');
Route::get('export-excel/rekap-alumni', [PindahKelasController::class, 'exportExcel'])->name('export-excel.rekap-alumni');

// END ROUTE NOT PERMISSION

Route::get('/dashboard', function () {
    
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {

    Route::resource('rekap-guru', RekapGuruController::class)->except([
        'destroy'
    ]);
    Route::get('rekap-guru/destroy/{id}', [RekapGuruController::class, 'destroy'])->name('rekap-guru.destroy');

    Route::get('rekap-semua-guru', [RekapGuruController::class, 'semuaGuruKhususBendahara'])->name('rekap-semua-guru');
    
    Route::group(['middleware' => ['CheckBendahara', 'CheckGuru']], function() {

        Route::resource('rekap-siswa', RekapSiswaController::class)->except([
            'destroy'
        ]);
        Route::get('rekap-siswa/destroy/{id}', [RekapSiswaController::class, 'destroy'])->name('rekap-siswa.destroy');

        Route::resource('user', UserController::class)->except([
            'destroy'
        ]);
        Route::get('user/destroy/{id}', [UserController::class, 'destroy'])->name('user.destroy');
        
        Route::resource('kontrak-guru', KontrakGuruController::class)->except([
            'destroy'
        ]);
        Route::get('kontrak-guru/destroy/{id}', [KontrakGuruController::class, 'destroy'])->name('kontrak-guru.destroy');

        Route::resource('guru', GuruController::class)->except([
            'destroy'
        ]);
        Route::get('guru/destroy/{id}', [GuruController::class, 'destroy'])->name('guru.destroy');

        Route::resource('siswa', SiswaController::class)->except([
            'destroy'
        ]);
        Route::get('siswa/destroy/{id}', [SiswaController::class, 'destroy'])->name('siswa.destroy');
        
        Route::resource('kelas', KelasController::class)->except([
            'destroy', 'edit', 'update'
        ]);
        Route::get('kelas/destroy/{id}', [KelasController::class, 'destroy'])->name('kelas.destroy');
        Route::get('kelas/edit/{id}', [KelasController::class, 'edit'])->name('kelas.edit');
        Route::put('kelas/update/{id}', [KelasController::class, 'update'])->name('kelas.update');

        Route::resource('hari-libur', HariLiburController::class)->except([
            'destroy'
        ]);
        Route::get('hari-libur/destroy/{id}', [HariLiburController::class, 'destroy'])->name('hari-libur.destroy');

        Route::resource('pindah-kelas', PindahKelasController::class)->except([
            'show', 'edit', 'update', 'destroy'
        ]);

        Route::resource('setting', SettingController::class);
        Route::resource('broadcast', BrutcastController::class);

    });
    
    Route::group(['middleware' => ['CheckGuru']], function() {

        Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
        Route::get('rekap-semua-guru', [RekapGuruController::class, 'semuaGuruKhususBendahara'])->name('rekap-semua-guru');
        Route::get('export-excel/except-guru/rekap-guru', [RekapGuruController::class, 'exportExcelExceptGuru'])->name('export-excel/except-guru/rekap-guru');
        Route::get('export-excel/perbulan', [DashboardController::class, 'exportExcelPerbulan'])->name('export-excel/perbulan');
        // Route::resource('spp', SppController::class)->except([
        //     'destroy'
        // ]);
        // Route::get('spp/destroy/{id}', [SppController::class, 'destroy'])->name('spp.destroy');
        // Route::post('import-spp', [SppController::class, 'importSpp'])->name('import-spp');
        Route::post('import-siswa', [SiswaController::class, 'importSiswa'])->name('import-siswa');
        Route::post('import-guru', [GuruController::class, 'importGuru'])->name('import-guru');
        Route::get('download-template-siswa', [SiswaController::class, 'downloadTemplateSiswa'])->name('download-template-siswa');
        Route::get('download-template-guru', [GuruController::class, 'downloadTemplateGuru'])->name('download-template-guru');

    });

});

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__.'/auth.php';
