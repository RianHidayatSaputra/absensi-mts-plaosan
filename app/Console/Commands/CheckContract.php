<?php

namespace App\Console\Commands;

use App\Models\Guru;
use App\Models\HariLibur;
use App\Models\RekapGuru;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class CheckContract extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:check-contract';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Check Teacher Contract';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        Carbon::setLocale('id');
        $dayNow = Carbon::now('Asia/Jakarta')->translatedFormat('l');
        $dayNowFix = strtolower($dayNow);
        $dateNow = Carbon::now('Asia/Jakarta')->format('Y-m-d');

        $gurus = Guru::all();
        $hari_libur = HariLibur::all();

        foreach($gurus as $guru) {

            if(count($hari_libur) > 0) {

                foreach($hari_libur as $hl) {

                    if($hl->tanggal == $dateNow) {
                        
                        RekapGuru::create([
                            'id_guru' => $guru->id,
                            'absen_masuk' => "16:00",
                            'absen_pulang' => "16:00",
                            'status' => 'Hari Libur '.$hl->nama,
                            'created_at' => Carbon::now('Asia/Jakarta')->format('Y-m-d H:i:s'),
                            'updated_at' => Carbon::now('Asia/Jakarta')->format('Y-m-d H:i:s'),
                        ]);

                    }

                }

            }else{

                // Log::info('tidak');
                if($guru->kontrak_guru) {

                    $kontrak_guru = explode(',', $guru->kontrak_guru);
                    $kg = collect($kontrak_guru);
    
                    if(!$kg->contains($dayNowFix)) {
                        // RekapGuru::create([
                        //     'nama' => $guru->nama,
                        //     'absen_masuk' => "16:00",
                        //     'absen_pulang' => "16:00",
                        //     'status' => 'Tidak Ada Kontrak',
                        //     'created_at' => Carbon::now('Asia/Jakarta')->format('Y-m-d H:i:s'),
                        //     'updated_at' => Carbon::now('Asia/Jakarta')->format('Y-m-d H:i:s'),
                        // ]);
    
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
                        "message" => 'Hari ini '.$guru->nama.' tidak ada kontrak di MTs. Manahijul Ulum! Selamat beristirahat dan sampai jumpa hari esok!'
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
}
