<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Guru extends Model
{
    use HasFactory;

    protected $table = 'guru';
    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $guarded = ['id'];

    public function rekap_guru(): HasMany {
        return $this->hasMany(RekapGuru::class, 'id_guru');
    }

    protected static function boot() {
        parent::boot();

        static::deleting(function($guru) {
            $guru->rekap_guru()->delete();
        });
    }
    
}
