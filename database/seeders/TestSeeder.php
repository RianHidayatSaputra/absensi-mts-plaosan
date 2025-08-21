<?php

namespace Database\Seeders;

use App\Models\RekapSiswa;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        RekapSiswa::factory(50)->create();
    }
}
