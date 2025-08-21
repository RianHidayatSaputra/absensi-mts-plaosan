<?php

namespace App\Console\Commands;

use App\Models\RekapGuru;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class DeleteDataRekapGuru extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:delete-data-rekap-guru';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Delete Data Rekap Guru';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $date_first = RekapGuru::select(DB::raw('DATE(created_at) as created_date'))->orderBy('created_at', 'asc')->first();

        if ($date_first) {

            $startDate = Carbon::parse($date_first->created_date);
            $endDate = $startDate->copy()->addMonths(1)->endOfMonth();
            
            RekapGuru::whereBetween('created_at', [$startDate, $endDate])->delete();
        
            Log::info("Data dihapus dari tanggal {$startDate} hingga {$endDate}");
        }
    }
}
