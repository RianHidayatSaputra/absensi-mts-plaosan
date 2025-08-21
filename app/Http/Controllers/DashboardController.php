<?php

namespace App\Http\Controllers;

use App\Exports\RekapPerbulan;
use App\Models\Guru;
use App\Models\Kelas;
use App\Models\RekapGuru;
use App\Models\RekapSiswa;
use App\Models\Siswa;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class DashboardController extends Controller
{
    public function index() {

        $datenow = Carbon::now('Asia/Jakarta')->format('Y-m-d');

        $startDate = Carbon::now('Asia/Jakarta')->previous(Carbon::SATURDAY)->startOfDay();
        $endDate = $startDate->copy()->addDays(5)->endOfDay();

        $dates = request()->query('dates');

        $users = User::all();
        $gurus = Guru::all();
        $siswas = Siswa::all();
        $rekap_absen_perbulan = [];

        $siswaTerlambatHariIni = Kelas::with([
            'siswa' => fn ($q) => $q->select('id', 'id_kelas'),
            'siswa.rekap_siswa' => fn ($q) => $q->select('id', 'id_siswa')
                                ->where(
                                    function ($query) {
                                        $query->where('status', 'Belum Hadir dan Terlambat')
                                              ->orWhere('status', 'Hadir tapi Terlambat');
                                })
                                ->whereDate('created_at', $datenow),
            ])->get();
            
        $siswaTidakHadirMingguIni = Kelas::with([
            'siswa' => function ($q) use ($startDate, $endDate) {
                $q->select('id', 'id_kelas')
                ->whereHas('rekap_siswa', function ($query) use ($startDate, $endDate) {
                    $query->where('status', 'Tidak Hadir')
                            ->whereBetween('created_at', [$startDate, $endDate]);
                });
            },
            'siswa.rekap_siswa' => function ($q) use ($startDate, $endDate) {
                $q->select('id', 'id_siswa')
                ->where('status', 'Tidak Hadir')
                ->whereBetween('created_at', [$startDate, $endDate]);
            },
        ])->get();

        if ($dates) {

            $dates[1] = $dates[1] . ' 23:59:59';

            foreach($gurus as $guru) {

                // array_push(
                //     $rekap_absen_perbulan, 
                //     RekapGuru::
                //     where('nama', $guru->nama)->
                //     whereMonth('created_at', $month)->
                //     whereYear('created_at', $year)->
                //     count()
                // );
                array_push(
                    $rekap_absen_perbulan, 
                    RekapGuru::
                    where('id_guru', $guru->id)->
                    where( function($query) {
                        $query->where('status', 'Hadir')->orWhere('status', 'Hadir tapi Terlambat');
                    })->
                    whereBetween('created_at', $dates)->
                    count()
                );
                
            }

        }

        return Inertia::render('Dashboard', [
            'users' => $users,
            'gurus' => $gurus,
            'siswas' => $siswas,
            'siswaTerlambatHariIni' => $siswaTerlambatHariIni,
            'siswaTidakHadirMingguIni' => $siswaTidakHadirMingguIni,
            'total_absen_guru' => $rekap_absen_perbulan,
            // 'datess' => $dates,
        ]);

    }

    public function exportExcelPerbulan() {
        $dates = request()->query('dates');
        
        return Excel::download(new RekapPerbulan($dates), Carbon::now('Asia/Jakarta')->format('Y-m-d')." rekap-guru-perbulan.xlsx");
    }
}
