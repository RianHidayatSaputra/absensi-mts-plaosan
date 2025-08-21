<?php

namespace App\Exports;

use App\Models\Guru;
use App\Models\RekapGuru;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class RekapGuruExport implements FromCollection, WithHeadings, WithStyles
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {

        $dates = request()->query('dates');
        $idGuru = request()->query('idGuru');

        if ($dates && count($dates) == 2) {
            $startDate = $dates[0] . ' 00:00:00';
            $endDate = $dates[1] . ' 23:59:59';
        }

        if (Auth::user()->role !== 'admin') {
            $guru = Guru::where('nama', Auth::user()->name)->first();
            $idGuru = $guru->id ??  null;
        }

        $query = RekapGuru::with(['guru' => function($q) {
            $q->select('id', 'nama');
        }])->select(
            'id_guru',
            'absen_masuk',
            'absen_pulang',
            'status',
            DB::raw('DATE(created_at) as created_at')
        );

        if (!empty($idGuru)) {
            $query->where('id_guru', $idGuru);
        }

        if (!empty($dates) && count($dates) == 2) {
            $query->whereBetween('created_at', [$startDate, $endDate]);
        }

        $rekapGuru = $query->get();
        return $this->logicReturn($rekapGuru);
    }

    public function headings(): array {
        return [
            'No',
            'Nama Guru',
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

    function logicReturn($rekapGuru) {

        $rekapGuru->each( function($item, $key) {
            $item->no = $key + 1;
        });

        return $rekapGuru->map( function($item) {

            return [
                'no' => $item->no,
                'nama' => $item->guru->nama, 
                'absen_masuk' => $item->absen_masuk, 
                'absen_pulang' => $item->absen_pulang, 
                'status' => $item->status, 
                'created_at' => $item->created_at, 
            ];

        });

    }
}
