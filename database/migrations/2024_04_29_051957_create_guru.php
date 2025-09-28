<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('guru', function (Blueprint $table) {
            $table->id();
            $table->string('nama', 50);
            $table->string('nuptk', 30)->nullable();
            $table->string('jabatan', 50);
            $table->string('status_kepegawaian', 5)->nullable();
            $table->string('alamat');
            $table->text('kontrak_guru')->nullable();
            $table->string('no_kartu', 50);
            $table->string('no_wa', 20);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('guru');
    }
};
