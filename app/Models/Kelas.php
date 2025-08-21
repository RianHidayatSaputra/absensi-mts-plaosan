<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Kelas extends Model
{
    protected $table = 'kelas';
    protected $primaryKey = 'id';

    protected $guarded = ['id'];

    public function siswa(): HasMany {
        return $this->hasMany(Siswa::class, 'id_kelas');
    }
}
