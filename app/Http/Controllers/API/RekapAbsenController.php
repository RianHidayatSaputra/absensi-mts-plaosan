<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Guru;
use App\Models\RekapGuru;
use App\Models\RekapSiswa;
use App\Models\Siswa;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class RekapAbsenController extends Controller
{
    public function rekapAbsen()
    {
        $user = auth('api')->user();

        if ($user->role == 'siswa') {
            $siswa = Siswa::where('nama_siswa', $user->name)->first();

            $rekap = RekapSiswa::with(['siswa:id,nama_siswa'])
                ->where('id_siswa', $siswa->id)
                ->orderBy('id', 'desc')
                ->paginate(10);

            $rekap->getCollection()->transform(function ($item) {
                $item->absen_masuk = $item->absen_masuk != null ? Carbon::parse($item->absen_masuk)->format('H:i') : '-';
                $item->absen_pulang = $item->absen_pulang != null ? Carbon::parse($item->absen_pulang)->format('H:i') : '-';
                $item->created_at = Carbon::parse($item->created_at)->format('d-m-Y');
                return $item;
            });
        } else {
            $guru = Guru::where('nama', $user->name)->first();

            $rekap = RekapGuru::with(['guru:id,nama'])
                ->where('id_guru', $guru->id)
                ->orderBy('id', 'desc')
                ->paginate(10);

            $rekap->getCollection()->transform(function ($item) {
                $item->absen_masuk = $item->absen_masuk != null ? Carbon::parse($item->absen_masuk)->format('H:i') : '-';
                $item->absen_pulang = $item->absen_pulang != null ? Carbon::parse($item->absen_pulang)->format('H:i') : '-';
                $item->created_at = Carbon::parse($item->created_at)->format('d-m-Y');
                return $item;
            });
        }

        return response()->json([
            'message' => 'Success!',
            'data' => $rekap
        ]);
    }

    public function rekapAbsenToday()
    {
        $dateNow = Carbon::now('Asia/Jakarta')->format('Y-m-d');
        $user = auth('api')->user();

        if ($user->role == 'siswa') {
            $siswa = Siswa::where('nama_siswa', $user->name)->first();

            $absenToday = RekapSiswa::select('absen_masuk', 'absen_pulang', 'status')->where('id_siswa', $siswa->id)->whereDate('created_at', $dateNow)->first();

            if ($absenToday) {
                $absenToday->absen_masuk = $absenToday->absen_masuk != null
                    ? Carbon::parse($absenToday->absen_masuk)->format('H:i')
                    : '-';

                $absenToday->absen_pulang = $absenToday->absen_pulang != null
                    ? Carbon::parse($absenToday->absen_pulang)->format('H:i')
                    : '-';
            } else {
                $absenToday = null;
            }
        } else {
            $guru = Guru::where('nama', $user->name)->first();

            $absenToday = RekapGuru::select('absen_masuk', 'absen_pulang', 'status')->where('id_guru', $guru->id)->whereDate('created_at', $dateNow)->first();

            if ($absenToday) {
                $absenToday->absen_masuk = $absenToday->absen_masuk != null
                    ? Carbon::parse($absenToday->absen_masuk)->format('H:i')
                    : '-';

                $absenToday->absen_pulang = $absenToday->absen_pulang != null
                    ? Carbon::parse($absenToday->absen_pulang)->format('H:i')
                    : '-';
            } else {
                $absenToday = null;
            }
        }

        return response()->json([
            'message' => 'Success!',
            'data' => $absenToday
        ]);
    }

    public function generateAccountLogin()
    {
        $siswas = Siswa::all();

        foreach ($siswas as $siswa) {
            $email = $siswa->nis . '@gmail.com';

            $exists = User::where('email', $email)->exists();

            if (!$exists) {
                User::create([
                    'name'     => $siswa->nama_siswa,
                    'email'    => $email,
                    'password' => bcrypt('12345678'),
                    'role'     => 'siswa',
                ]);
            }
        }

        return response()->json(['message' => 'Akun siswa berhasil digenerate!']);
    }
}
