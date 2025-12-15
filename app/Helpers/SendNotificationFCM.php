<?php

namespace App\Helpers;

use Kreait\Firebase\Messaging\CloudMessage;
use Kreait\Firebase\Messaging\Notification;

class SendNotificationFCM
{
    /**
     * Create a new class instance.
     */
    public static function SendNotificationToSudents($timeNow, $data, $dateNow, $setting_waktu)
    {
        $messaging = app(FirebaseService::class)->messaging();

        $message = CloudMessage::new()->toToken($data->device_token)
            ->withNotification(Notification::create(
                $timeNow > '00:00' && $timeNow <= $setting_waktu->absen_masuk
                    ? "Presensi Masuk"
                    : (
                        $timeNow >= $setting_waktu->absen_pulang && $timeNow < '23:59'
                        ? "Presensi Pulang"
                        : "Presensi Masuk"
                    ),
                $timeNow > '00:00' && $timeNow <= $setting_waktu->absen_masuk
                    ? "Semangat Pagi!\nPresensi masuk {$data->nama_siswa} di jam {$timeNow} pada tanggal {$dateNow} telah tercatat. Terima kasih telah hadir tepat Waktu. Semoga harimu menyenangkan!"
                    : (
                        $timeNow >= $setting_waktu->absen_pulang && $timeNow < '23:59'
                        ? "Selamat Sore!\nPresensi pulang {$data->nama_siswa} di jam {$timeNow} pada tanggal {$dateNow} telah tercatat. Terima kasih atas kerjasamanya hari ini!"
                        : "Semangat Pagi!\nPresensi masuk {$data->nama_siswa} di jam {$timeNow} pada tanggal {$dateNow} tercatat hadir, namun dengan keterlambatan. Tetap semangat untuk menjalani hari!"
                    )
            ))
            ->withData([
                'screen' => 'absensi',
            ]);

        $messaging->send($message);
    }

    public static function SendNotificationToTeachers($timeNow, $data, $dateNow, $setting_waktu)
    {
        $messaging = app(FirebaseService::class)->messaging();

        $message = CloudMessage::new()->toToken($data->device_token)
            ->withNotification(Notification::create(
                $timeNow > '00:00' && $timeNow <= $setting_waktu->absen_masuk
                    ? "Presensi Masuk"
                    : (
                        $timeNow >= $setting_waktu->absen_pulang && $timeNow < '23:59'
                        ? "Presensi Pulang"
                        : "Presensi Masuk"
                    ),
                $timeNow > '00:00' && $timeNow <= $setting_waktu->absen_masuk
                    ? "Semangat Pagi!\nPresensi masuk {$data->nama} di jam {$timeNow} pada tanggal {$dateNow} telah tercatat. Terima kasih telah hadir tepat Waktu. Semoga harimu menyenangkan!"
                    : (
                        $timeNow >= $setting_waktu->absen_pulang && $timeNow < '23:59'
                        ? "Selamat Sore!\nPresensi pulang {$data->nama} di jam {$timeNow} pada tanggal {$dateNow} telah tercatat. Terima kasih atas kerjasamanya hari ini!"
                        : "Semangat Pagi!\nPresensi masuk {$data->nama} di jam {$timeNow} pada tanggal {$dateNow} tercatat hadir, namun dengan keterlambatan. Tetap semangat untuk menjalani hari!"
                    )
            ))
            ->withData([
                'screen' => 'absensi',
            ]);

        $messaging->send($message);
    }
}
