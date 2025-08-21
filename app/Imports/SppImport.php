<?php

namespace App\Imports;

use App\Models\Spp;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class SppImport implements ToModel, WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function model(array $row)
    {
        return new Spp([
            'id_siswa' => $row['id_siswa'],
            'nominal_spp' => $row['nominal_spp'],
            'data_spp' => $row['data_spp'],
        ]);
    }
}
