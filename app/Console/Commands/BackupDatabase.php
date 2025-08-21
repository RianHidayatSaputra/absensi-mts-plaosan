<?php

namespace App\Console\Commands;

use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Log;
use Symfony\Component\Process\Process;
use Symfony\Component\Process\Exception\ProcessFailedException;

class BackupDatabase extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:backup-database';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Backup Database';
    protected $process;

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $backupFolder = storage_path('app/backup-db/');
        $backupFile = $backupFolder . Carbon::now('Asia/Jakarta')->format('Y-m-d_H-i-s') . '.sql';

        if (!is_dir($backupFolder)) {
            mkdir($backupFolder, 0755, true);
        }

        try {

            $pdo = new \PDO('mysql:host='.env('DB_HOST').';dbname='.env('DB_DATABASE'), env('DB_USERNAME'), env('DB_PASSWORD'));
            $pdo->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);

            $tables = $pdo->query("SHOW TABLES")->fetchAll(\PDO::FETCH_COLUMN);

            $handle = fopen($backupFile, 'w');
            if ($handle === false) {
                throw new \Exception("Gagal membuka file untuk ditulis: $backupFile");
            }

            foreach ($tables as $table) {
        
                $createTable = $pdo->query("SHOW CREATE TABLE `$table`")->fetchColumn(1);
                fwrite($handle, "$createTable;\n\n");

                $rows = $pdo->query("SELECT * FROM `$table`")->fetchAll(\PDO::FETCH_ASSOC);
                foreach ($rows as $row) {
                    $values = array_map([$pdo, 'quote'], array_values($row));
                    $sql = "INSERT INTO `$table` VALUES (" . implode(',', $values) . ");\n";
                    fwrite($handle, $sql);
                }

                fwrite($handle, "\n\n");
            }

            fclose($handle);

            Log::info("Backup berhasil disimpan di: {$backupFile}");
        } catch (\Exception $e) {
            Log::error("Backup gagal: " . $e->getMessage());
        }
    }


}
