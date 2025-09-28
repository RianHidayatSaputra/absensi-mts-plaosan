<?php

namespace App\Imports;

use App\Models\Guru;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithStartRow;

class GuruImport implements ToModel, WithStartRow
{
    /**
    * @param Collection $collection
    */
    public function model(array $row)
    {
        return new Guru([
            'nama' => $row[0],
            'nuptk' => (string) $row[1],
            'jabatan' => $row[2],
            'status_kepegawaian' => $row[3],
            'alamat' => $row[4],
            'kontrak_guru' => $row[5],
            'no_kartu' => (string) $row[6],
            'no_wa' => (string) $row[7],
        ]);
    }

    public function startRow(): int
    {
        return 9;
    }
}
