<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RekapSiswa extends Model
{
    use HasFactory;

    protected $table = 'rekap_siswa';
    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $guarded = ['id'];

    public function siswa(): BelongsTo {
        return $this->belongsTo(Siswa::class, 'id_siswa');
    }

}
