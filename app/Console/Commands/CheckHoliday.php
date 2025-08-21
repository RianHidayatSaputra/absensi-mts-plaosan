<?php

namespace App\Console\Commands;

use App\Models\Guru;
use App\Models\HariLibur;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class CheckHoliday extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:check-holiday';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Check Holiday';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $dateNow = Carbon::now('Asia/Jakarta')->format('Y-m-d');

        $gurus = Guru::all();
        $hari_libur = HariLibur::all();

        foreach($gurus as $guru) {

            foreach($hari_libur as $hl) {

                if($hl->tanggal == $dateNow) {

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
                    "message" => 'Hari ini adalah hari '.$hl->nama.'. Selamat menikmati hari libur bersama keluarga! See you next time!'
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
    }
}
