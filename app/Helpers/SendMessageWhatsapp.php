<?php

namespace App\Helpers;

use GuzzleHttp\Client;

class SendMessageWhatsapp
{
    /**
     * Create a new class instance.
     */

    public static function SendMessageWhatsappToStudents($timeNow, $data, $dateNow, $setting_waktu) {

        $token = env('API_WHATSAPP_KEY');

        $client  = new Client();

        $message = $timeNow > '05:00' && $timeNow <= $setting_waktu->absen_masuk 
                    ? 
                        "Semangat Pagi!\nPresensi masuk ". $data->nama_siswa ." di jam ". $timeNow ." pada tanggal ". $dateNow ." telah tercatat. Terima kasih telah hadir tepat Waktu. Semoga harimu menyenangkan !"
                    : 

                    (
                        $timeNow >= $setting_waktu->absen_pulang && $timeNow < '22:00' ? 
                            "Selamat Siang!\nPresensi pulang ". $data->nama_siswa ." di jam ". $timeNow ." pada tanggal ". $dateNow ." telah tercatat. Terima kasih atas kerjasamanya hari ini !"
                        : 
                            "Semangat Pagi!\nPresensi masuk ".$data->nama_siswa." di jam ". $timeNow ." pada tanggal ". $dateNow ." tercatat hadir, namun dengan keterlambatan. Tetap semangat untuk menjalani hari!"
                    );

        $response = $client->post('https://api.fonnte.com/send', [
            'headers' => [
                'Authorization' => $token
                ],
                'form_params' => [
                    'target' => $data->no_ortu,
                    'message' => $message
                ]
        ]);

        return $response->getBody()->getContents();

    }

    public static function SendMessageWhatsappToTeachers($timeNow, $data, $dateNow, $setting_waktu) {

        $token = env('API_WHATSAPP_KEY');

        $client  = new Client();

        $message =  $timeNow > '05:00' && $timeNow <= $setting_waktu->absen_masuk 
                    ? 
                        "Semangat Pagi!\nPresensi masuk ". $data->nama ." di jam ". $timeNow ." pada tanggal ". $dateNow ." telah tercatat. Terima kasih telah hadir tepat Waktu. Semoga harimu menyenangkan !"
                    : 

                    (
                        $timeNow >= $setting_waktu->absen_pulang && $timeNow < '22:00' ? 
                            "Selamat Siang!\nPresensi pulang ". $data->nama ." di jam ". $timeNow ." pada tanggal ". $dateNow ." telah tercatat. Terima kasih atas kerjasamanya hari ini !"
                        : 
                            "Semangat Pagi!\nPresensi masuk ".$data->nama." di jam ". $timeNow ." pada tanggal ". $dateNow ." tercatat hadir, namun dengan keterlambatan. Tetap semangat untuk menjalani hari!"
                    );

        $response = $client->post('https://api.fonnte.com/send', [
            'headers' => [
                'Authorization' => $token
                ],
                'form_params' => [
                    'target' => $data->no_wa,
                    'message' => $message
                ]
        ]);

        return $response->getBody()->getContents();    
    }

    public static function SendMessageWhatsappIfHoliday($data) {

        $token = env('API_WHATSAPP_KEY');

        $client  = new Client();

        $response = $client->post('https://api.fonnte.com/send', [
            'headers' => [
                'Authorization' => $token
                ],
                'form_params' => [
                    'target' => $data->no_wa,
                    'message' => "Mohon maaf ".$data->nama."! Absen ditutup karna hari ini hari libur! Silahkan coba lagi lain waktu!"
                ]
        ]);

        return $response->getBody()->getContents();
    }

    public static function SendMessageWhatsappPaidSpp($no_ortu, $message) {

        $token = env('API_WHATSAPP_KEY');

        $client  = new Client();

        $response = $client->post('https://api.fonnte.com/send', [
            'headers' => [
                'Authorization' => $token
                ],
                'form_params' => [
                    'target' => $no_ortu,
                    'message' => $message
                ]
        ]);

        return $response->getBody()->getContents();

    }
}
