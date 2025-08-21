<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RekapGuru extends Model
{
    use HasFactory;

    protected $table = 'rekap_guru';
    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $guarded = ['id'];

    public function guru(): BelongsTo {
        return $this->belongsTo(Guru::class, 'id_guru');
    }
}
