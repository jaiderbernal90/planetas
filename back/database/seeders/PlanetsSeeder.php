<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PlanetsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('planets')->insert([
            'name' => 'Tierra',
            'rotationPeriod' => '365',
            'diameter' => '150000',
            'weather' => 'Calido',
            'ground' => '150000',
            'counter' => 1,
            'created_at' => '2022-01-27 23:23:28',
            'updated_at' => '2022-01-27 23:23:28',
        ]);
        DB::table('planets')->insert([
            'name' => 'Marte',
            'rotationPeriod' => '280',
            'diameter' => '190000',
            'weather' => 'Calido',
            'ground' => '190000',
            'counter' => 10,
            'created_at' => '2022-01-27 23:23:28',
            'updated_at' => '2022-01-27 23:23:28',
        ]);
        DB::table('planets')->insert([
            'name' => 'Jupiter',
            'rotationPeriod' => '450',
            'diameter' => '200000',
            'weather' => 'Frio',
            'ground' => '200000',
            'counter' => 0,
            'created_at' => '2022-01-27 23:23:28',
            'updated_at' => '2022-01-27 23:23:28',
        ]);
    }
}
