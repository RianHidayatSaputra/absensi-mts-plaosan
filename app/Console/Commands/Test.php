<?php

namespace App\Console\Commands;

use App\Models\RekapGuru;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class Test extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:test';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        Log::info(Carbon::now('Asia/Jakarta')->format('Y-m-d H:i:s'));
        // RekapGuru::create([
        //     'nama' => "Pak Muhammad Rizal Aftoni",
        //     'absen_masuk' => "16:00",
        //     'absen_pulang' => "16:00",
        //     'status' => 'Tidak Absen',
        //     'created_at' => Carbon::now('Asia/Jakarta')->format('Y-m-d H:i:s'),
        //     'updated_at' => Carbon::now('Asia/Jakarta')->format('Y-m-d H:i:s'),
        // ]);
    }
}
