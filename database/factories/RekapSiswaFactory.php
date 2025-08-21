<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\RekapSiswa>
 */
class RekapSiswaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id_siswa' => '1',
            'absen_masuk' => '07:30',
            'absen_pulang' => '15:30',
            'status' => 'hadir'
        ];
    }
}
