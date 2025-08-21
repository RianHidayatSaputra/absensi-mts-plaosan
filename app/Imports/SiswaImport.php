<?php

namespace App\Imports;

use App\Models\Kelas;
use App\Models\Siswa;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithStartRow;

class SiswaImport implements ToModel, WithStartRow
{
    /**
    * @param Collection $collection
    */
    public function model(array $row)
    {
        $kelas = Kelas::where('nama_kelas', (string) $row[6])->first();

        return new Siswa([
            'nis' => $row[0],
            'no_kartu' => (string) $row[1],
            'nama_siswa' => $row[2],
            'nama_ortu' => $row[3],
            'no_ortu' => $row[4],
            'tahun_masuk' => (string) $row[5],
            'id_kelas' => $kelas->id,
        ]);
    }

    public function startRow(): int
    {
        return 9;
    }
}
