<?php

namespace App\Exports;

use App\Models\RekapGuru;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class RekapGuruExceptGuruExport implements FromCollection, WithHeadings, WithStyles
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        $rekapGuru = RekapGuru::with('guru')->select('nama', 'absen_masuk', 'absen_pulang', 'status', DB::raw('DATE(created_at) as created_at'))->get();

        dd($rekapGuru);

        $rekapGuru->each( function($item, $key) {
            $item->no = $key + 1;
        });

        return $rekapGuru->map( function($item) {

            return [
                'no' => $item->no,
                'nama' => $item->nama, 
                'absen_masuk' => $item->absen_masuk, 
                'absen_pulang' => $item->absen_pulang, 
                'status' => $item->status, 
                'created_at' => $item->created_at, 
            ];

        });

    }

    public function headings(): array {
        return [
            'No',
            'Nama',
            'Absen Masuk',
            'Absen Pulang',
            'Status',
            'Tanggal'
        ];
    }

    public function styles(Worksheet $sheet) {
        return [
            1 => [
                'font' => ['bold' => true],
                'fill' => [
                    'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                    'color' => ['argb' => '67ACF5']
                ]
            ]
        ];
    }
}
