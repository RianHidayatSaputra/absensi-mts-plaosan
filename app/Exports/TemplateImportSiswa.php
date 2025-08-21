<?php

namespace App\Exports;

use App\Models\Kelas;
use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use Maatwebsite\Excel\Concerns\WithColumnWidths;
use Maatwebsite\Excel\Concerns\WithCustomStartCell;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithStyles;
use Maatwebsite\Excel\Events\AfterSheet;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class TemplateImportSiswa implements FromArray, WithHeadings, WithCustomStartCell, WithEvents, WithStyles, WithColumnFormatting, WithColumnWidths
{
    /**
    * @return \Illuminate\Support\Collection
    */
    
    public function array(): array {
        return [
            ['12000855', '12345', 'Rian Hidayat Saputra', 'Musrifah', '6285179815949', '2020', 'XI'],
        ];
    }

    public function headings(): array {
        return [
            'NIS',
            'No Kartu',
            'Nama Siswa',
            'Nama Ortu',
            'No Ortu',
            'Tahun Masuk',
            'Kelas',
        ];
    }

    public function startCell(): string {
        return 'A8';
    }

    public function registerEvents(): array {
        return [
            AfterSheet::class => function (AfterSheet $event) {

                $kelasList = Kelas::pluck('nama_kelas')->toArray();
                $kelasString = implode(', ', $kelasList);

                $event->sheet->setCellValue('A1', 'Ketentuan Import Data Siswa:');
                $event->sheet->setCellValue('A2', '1. Dilarang mengedit file ini. Hanya boleh menambah data siswa!');
                $event->sheet->setCellValue('A3', '2. Format nomor whatsapp orang tua harus dimulai 62, ex: 6285179815949');
                $event->sheet->setCellValue('A4', '3. Jika sudah kemudian disimpan dan diupload/import ke menu siswa!');
                $event->sheet->setCellValue('A5', '4. Pilih Kelas Sesuai Dengan Data Dibawah Ini!');
                $event->sheet->setCellValue('A6', $kelasString);
            }
        ];
    }

    public function columnWidths(): array
    {
        return [
            'A' => 13,           
            'B' => 10,           
            'C' => 25,           
            'D' => 15,           
            'E' => 20,           
            'F' => 13,       
        ];
    }

    public function columnFormats(): array
    {
        return [
            'E' => NumberFormat::FORMAT_NUMBER
        ];
    }

    public function styles(Worksheet $sheet)
    {
        return [
            1 => [
                'font' => ['bold' => true, 'size' => 16],
            ],
            2 => [
                'font' => ['bold' => true],
            ],
            3 => [
                'font' => ['bold' => true],
            ],
            4 => [
                'font' => ['bold' => true],
            ],
            5 => [
                'font' => ['bold' => true],
            ],
            6 => [
                'font' => ['bold' => true],
            ],
            8 => [
                'font' => ['bold' => true],
                'fill' => [
                    'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                    'color' => ['argb' => '67ACF5']
                ]
            ],
        ];
    }
    
}
