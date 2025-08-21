<?php

namespace App\Exports;

use App\Models\Guru;
use App\Models\RekapGuru;
use Carbon\Carbon;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class RekapPerbulan implements FromCollection, WithHeadings, WithStyles
{
    protected $dates;
    /**
    * @return \Illuminate\Support\Collection
    */
    public function __construct($dates)
    {
        $this->dates = $dates;
    }

    public function collection()
    {
        $endDate = Carbon::parse($this->dates[1])->addDay()->format('Y-m-d');

        $guru_perbulan = RekapGuru::with('guru')->whereBetween('created_at', [$this->dates[0], $endDate])->whereIn('status', ['Hadir', 'Hadir tapi Terlambat'])->get();

        $all_guru = Guru::all();

        $data = [];
    
        foreach($all_guru as $key => $guru) {
            $data[$guru->nama] = [
                'no' => $key + 1,
                'nama' => $guru->nama,
                'jumlah_hadir' => 0,
            ];
        }
    
        foreach($guru_perbulan as $gp) {
            
            if (isset($data[$gp->guru->nama])) {
                $data[$gp->guru->nama]['jumlah_hadir'] += 1;
            }

        }
    
        return new Collection(array_values($data));
    }

    public function headings(): array
    {
        return [
            'No',
            'Nama Guru',
            'Jumlah Hadir'
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
    
}
