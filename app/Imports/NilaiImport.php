<?php

namespace App\Imports;

use GuzzleHttp\Client;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;

class NilaiImport implements ToCollection
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $collection)
    {
        $header = $collection->first()->toArray();
        $dataRows = $collection->skip(1);
        $token = env('API_WHATSAPP_KEY');

        foreach ($dataRows as $data) {

            $client  = new Client();

            $message =  $data[array_search('nilai', $header)] < $data[array_search('kkm', $header)]
                        ? 
                            "Assalamu'alaikum Wr. Wb.\nKepada Yth. Bapak/Ibu Wali Murid,\nAnanda ".$data[array_search('nama', $header)].", mendapatkan nilai ".$data[array_search('nilai', $header)]." pada mapel ".$data[array_search('mapel', $header)]." dalam ".$data[array_search('jenis', $header)].".\nNilai tersebut belum mencapai Kriteria Ketuntasan Minimal (KKM) yang ditetapkan, yaitu ".$data[array_search('kkm', $header)].". Kami mohon kerja sama Bapak/Ibu untuk mendampingi putra/putri Anda dalam meningkatkan pemahaman materi agar mencapai hasil yang lebih baik di masa mendatang.\nTerima kasih atas perhatian dan kerja samanya.\nWassalamu'alaikum Wr. Wb."
                        : 
                            "Assalamu'alaikum Wr. Wb.\nKepada Yth. Bapak/Ibu Wali Murid,\nAnanda ".$data[array_search('nama', $header)].", mendapatkan nilai ".$data[array_search('nilai', $header)]." pada mapel ".$data[array_search('mapel', $header)]." dalam ".$data[array_search('jenis', $header)].".\nNilai tersebut telah memenuhi Kriteria Ketuntasan Minimal (KKM) yang ditetapkan, yaitu ".$data[array_search('kkm', $header)].". Kami mengucapkan selamat atas pencapaian ini dan berharap putra/putri Anda dapat terus mempertahankan prestasi belajar.\nTerima kasih atas dukungan Bapak/Ibu dalam mendampingi proses belajar putra/putri Anda.\nWassalamu'alaikum Wr. Wb.";

            $client->post('https://api.fonnte.com/send', [
                'headers' => [
                    'Authorization' => $token
                    ],
                    'form_params' => [
                        'target' =>  $data[array_search('no_hp', $header)],
                        'message' => $message
                    ]
            ]);

        }

    }
}
