<?php

namespace App\Console\Commands;

use App\Models\Guru;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class CheckWeekend extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:check-weekend';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Check Weekend';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $dayOfWeek = Carbon::now('Asia/Jakarta')->dayOfWeek;

        $gurus = Guru::all();

        foreach($gurus as $guru) {

            if($dayOfWeek == 6 || $dayOfWeek == 0) {

                $token = env('API_WHATSAPP_KEY');
                $day_name = $dayOfWeek == 6 ? 'Sabtu' : 'Minggu';

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
                "message" => 'Hari ini adalah hari '.$day_name.'. Selamat menikmati hari libur bersama keluarga! See you next time!'
                // 'countryCode' => '62', //optional
                ),
                CURLOPT_HTTPHEADER => array(
                    "Authorization: $token"
                ),
                ));

                $response = curl_exec($curl);

                curl_close($curl);

            }
        }
    }
}
