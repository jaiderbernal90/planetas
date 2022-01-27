<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Persons extends Model
{
    use HasFactory;
    
    protected $fillable = ['name', 'age', 'counter','height', 'weight', 'gender', 'planets_id','date_of_birth'];

   
    
}
