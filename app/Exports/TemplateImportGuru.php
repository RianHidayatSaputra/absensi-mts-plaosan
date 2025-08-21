<?php

namespace App\Exports;

use App\Models\Kelas;
use App\Models\KontrakGuru;
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

class TemplateImportGuru implements FromArray, WithHeadings, WithCustomStartCell, WithEvents, WithStyles, WithColumnFormatting, WithColumnWidths
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function array(): array {
        return [
            ['Joko Agung Sayuto, S.Kom', '', 'Kepala Program Keahlian RPL', 'GTT', 'Karangsondo', 'senin,selasa', '12345', '6285179815949'],
        ];
    }

    public function headings(): array {
        return [
            'Nama',
            'NUPTK',
            'Jabatan',
            'Status Kepegawaian',
            'Alamat',
            'Kontrak Guru',
            'No Kartu',
            'No Whatsapp',
        ];
    }

    public function startCell(): string {
        return 'A8';
    }

    public function registerEvents(): array {
        return [
            AfterSheet::class => function (AfterSheet $event) {

                $kontrakGuruList = KontrakGuru::pluck('hari')->toArray();
                $kontrakGuruString = implode(', ', $kontrakGuruList);

                $event->sheet->setCellValue('A1', 'Ketentuan Import Data Guru:');
                $event->sheet->setCellValue('A2', '1. Dilarang mengedit file ini. Hanya boleh menambah data guru!');
                $event->sheet->setCellValue('A3', '2. Format nomor whatsapp harus dimulai 62, ex: 6285179815949');
                $event->sheet->setCellValue('A4', '3. Jika sudah kemudian disimpan dan diupload/import ke menu guru!');
                $event->sheet->setCellValue('A5', '4. Pilih hari kontrak sesuai dengan data dibawah ini!');
                $event->sheet->setCellValue('A6', $kontrakGuruString);
            }
        ];
    }

    public function columnWidths(): array
    {
        return [
            'A' => 30,           
            'B' => 15,           
            'C' => 28,           
            'D' => 20,           
            'E' => 20,           
            'F' => 20,       
            'G' => 20,       
            'H' => 20,       
        ];
    }

    public function columnFormats(): array
    {
        return [
            'H' => NumberFormat::FORMAT_NUMBER
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
