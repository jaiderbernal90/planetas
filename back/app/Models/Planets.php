<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Persons;

class Planets extends Model
{   
    use HasFactory;

    protected $fillable = ['name', 'rotationPeriod', 'diameter', 'weather', 'ground'];

    // Relacion 1:* con planetas
    public function persons() {
        return $this->hasMany(Persons::class);
    }
}
