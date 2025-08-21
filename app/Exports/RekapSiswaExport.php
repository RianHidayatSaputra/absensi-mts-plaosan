<?php

namespace App\Exports;

use App\Models\RekapSiswa;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class RekapSiswaExport implements FromCollection, WithHeadings, WithStyles
{
    /**
    * @return \Illuminate\Support\Collection
    */

    protected $kelas;
    protected $dates;

    public function __construct($kelas = null, $dates = [])
    {
        $this->kelas = $kelas;
        $this->dates = $dates;
    }

    public function collection()
    {
        if ($this->dates && count($this->dates) == 2) {
            $startDate = $this->dates[0] . ' 00:00:00';
            $endDate = $this->dates[1] . ' 23:59:59';
        }

        $query = RekapSiswa::with(['siswa' => function($q) {
                $q->select('id', 'nama_siswa', 'id_kelas');
            }])
            ->select(
                'id_siswa',
                'absen_masuk',
                'absen_pulang',
                'status',
                DB::raw('DATE(created_at) as created_at')
            );

        if (!empty($this->kelas)) {
            $query->whereHas('siswa', function ($q) {
                $q->where('id_kelas', $this->kelas);
            });
        }

        if (!empty($this->dates) && count($this->dates) == 2) {
            $query->whereBetween('created_at', [$startDate, $endDate]);
        }

        $rekap_siswa = $query->get();

        return $this->noMat($rekap_siswa);
    }

    public function headings(): array {
        return [
            'No',
            'Nama Siswa',
            'Absen Masuk',
            'Absen Pulang',
            'Status',
            'Tanggal'
        ];
    }

    public function styles(Worksheet $sheet)
    {
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

    function noMat($rekapSiswa) {
        $rekapSiswa->each( function($item, $key) {
            $item->no = $key + 1;
        });

        return $rekapSiswa->map( function($item) {
            
            return [
                'no' => $item->no,
                'nama siswa' => $item->siswa->nama_siswa,
                'absen_masuk' => $item->absen_masuk,
                'absen_pulang' => $item->absen_pulang,
                'status' => $item->status,
                'created_at' => $item->created_at,
            ];
            
        });
    }
}
