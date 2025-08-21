<?php

namespace App\Console\Commands;

use App\Models\Guru;
use App\Models\RekapGuru;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class CheckAbsen extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:check-absen';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Check Absen';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        Carbon::setLocale('id');
        $dayNow = Carbon::now('Asia/Jakarta')->format('d');

        $rekapGuruNames = RekapGuru::whereDay('created_at', $dayNow)->pluck('nama')->toArray();
        $missingGurus = Guru::whereNotIn('nama', $rekapGuruNames)->get();

        foreach ($missingGurus as $guru) {
            // Log::info($guru->nama);
            RekapGuru::create([
                'nama' => $guru->nama,
                'absen_masuk' => "19:30",
                'absen_pulang' => "19:30",
                'status' => 'Tidak Absen',
                'created_at' => Carbon::now('Asia/Jakarta')->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now('Asia/Jakarta')->format('Y-m-d H:i:s'),
            ]);

            $token = env('API_WHATSAPP_KEY');

            $curl = curl_init();

            curl_setopt_array($curl, array(
                CURLOPT_URL => 'https://api.fonnte.com/send',
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => '',
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'POST',
                CURLOPT_POSTFIELDS => array(
                'target' => $guru->no_wa,
                "message" => 'Hari ini '.$guru->nama.' tidak melakukan absen sama sekali! Absen otomatis akan terisi oleh system dengan keterangan Tidak Hadir! Selamat beristirahat dan sampai jumpa hari esok!'
                // 'countryCode' => '62', //optional
                ),
                CURLOPT_HTTPHEADER => array(
                    "Authorization: $token" //change TOKEN to your actual token
                ),
            ));

            $response = curl_exec($curl);

            curl_close($curl);

        }
    }
}
