<?php

use Carbon\Carbon;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schedule;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote')->hourly();

Schedule::command('app:check-contract')->dailyAt('18:00')->when(function() {
    $days = Carbon::now('Asia/Jakarta')->format('l');
    return !in_array($days, ['Friday']);
});

Schedule::command('app:check-absen')->dailyAt('19:30')->when(function() {
    $days = Carbon::now('Asia/Jakarta')->format('l');
    return !in_array($days, ['Friday']);
});

Schedule::command('app:backup-database')->weekly();

Schedule::command('app:delete-data-rekap-guru')->monthly();

Schedule::command('app:delete-data-rekap-siswa')->monthly();

Schedule::command('app:check-weekend')->weekly();
