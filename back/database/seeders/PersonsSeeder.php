<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PersonsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        DB::table('persons')->insert([
            'name' => 'Jaider Bernal',
            'age' => 19,
            'height' => 180,
            'weight' => 80,
            'gender' => 'masculino',
            'planets_id' => 1,
            'counter' => 0,
            'created_at' => '2022-01-27 23:23:28',
            'updated_at' => '2022-01-27 23:23:28',
        ]);

        DB::table('persons')->insert([
            'name' => 'Juan Perez',
            'age' => 30,
            'height' => 170,
            'weight' => 80,
            'gender' => 'masculino',
            'planets_id' => 2,
            'counter' => 2,
            'created_at' => '2022-01-27 23:23:28',
            'updated_at' => '2022-01-27 23:23:28',
        ]);

        DB::table('persons')->insert([
            'name' => 'Karen Lopez',
            'age' => 25,
            'height' => 160,
            'weight' => 50,
            'gender' => 'femenino',
            'planets_id' => 3,
            'counter' => 10,
            'created_at' => '2022-01-27 23:23:28',
            'updated_at' => '2022-01-27 23:23:28',
        ]);
    }
}
