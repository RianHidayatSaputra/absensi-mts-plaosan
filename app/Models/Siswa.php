<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Siswa extends Model
{
    use HasFactory;

    protected $table = 'siswa';
    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $guarded = ['id'];

    public function spp(): HasOne {
        return $this->hasOne(Spp::class);
    }

    public function rekap_siswa(): HasMany {
        return $this->hasMany(RekapSiswa::class, 'id_siswa');
    }

    protected static function boot() {
        parent::boot();

        static::deleting(function($siswa) {
            $siswa->rekap_siswa()->delete();
        });
    }

    public function kelas(): BelongsTo {
        return $this->belongsTo(Kelas::class, 'id_kelas');
    }
    
}
