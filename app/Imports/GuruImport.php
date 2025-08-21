<?php

namespace App\Imports;

use App\Models\Guru;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class GuruImport implements ToModel, WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function model(array $row)
    {
        return new Guru([
            'nama' => $row['nama'],
            'nuptk' => (string) $row['nuptk'],
            'jabatan' => $row['jabatan'],
            'status_kepegawaian' => $row['status_kepegawaian'],
            'alamat' => $row['alamat'],
            'kontrak_guru' => $row['kontrak_guru'],
            'no_kartu' => (string) $row['no_kartu'],
            'no_wa' => (string) $row['no_wa'],
        ]);
    }
}
