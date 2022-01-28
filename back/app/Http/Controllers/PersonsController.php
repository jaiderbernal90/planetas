<?php

namespace App\Http\Controllers;

use App\Models\Persons;
use App\Models\Planets;
use Illuminate\Http\Request;

class PersonsController extends Controller
{
    /**
     * Función para mostrar todas las personas registradas en base de datos
     */
    public function index()
    {

        $persons = Persons::select(
            'persons.*',
            'planets.name as planetName'
            )
            ->leftjoin('planets', 'persons.planets_id', '=', 'planets.id')
            ->get();

        return response()->json([
            'status' => 'OK',
            'success' => true,
            'personas' => $persons
        ]);
    }

    /**
     * Función para mostrar todas las personas registradas en base de datos
     */
    public function getTop3Persons()
    {
        $persons = Persons::select('persons.name', 'persons.counter', 'planets.name as planetName')
        ->orderBy('counter', 'desc')
        ->leftjoin('planets', 'persons.planets_id', '=', 'planets.id')
        ->limit(3)
        ->get();
        
        
        return response()->json([
            'status' => 'OK',
            'success' => true,
            'personas' => $persons
        ]);
    }
    /**
     * Función para crear personas
     */
    public function create(Request $request)
    {
        try {
            Persons::create([
                'name' => $request->input('name'),
                'lastName' => $request->input('lastName'),
                'age' => $request->input('age'),
                'height' => $request->input('height'),
                'weight' => $request->input('weight'),
                'gender' => $request->input('gender'),
                'date_of_birth' => $request->input('date_of_birth'),
                'planets_id' => $request->input('planets_id'),
                'counter' => 0
            ]);

            return response()->json([
                'status' => 'OK',
                'success' => true,
                'message' => 'Persona registrada correctamente',
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 'ERROR',
                'success' => false,
                'message' => 'La persona no pudo ser registrada',
                'Error' => $th
            ]);
        }
    }

    /**
     * 
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * 
     */
    public function show(Persons $persons)
    {
        //
    }

    /**
     * Función para buscar personas por medio de su id
     */
    public function edit($id)
    {
        $persons= new Persons;
        $general=$persons->find($id);

        if($general){
            return response()->json([
                'status' => 'OK',
                'success' => true,
                'persona' => $general
            ]);
        }else{
            return response()->json([
                'status' => 'ERROR',
                'success' => false,
                'message' => 'No existe la persona solicitada'
            ]);
        } 
    }

    /**
     * Función para actualizar la información de las personas
     */
    public function update(Request $request, $id)
    {
        $persons = Persons::find($id);

        if ($persons) {
            try {
                $persons->update([
                    'name' => $request->input('name'),
                    'lastName' => $request->input('lastName'),
                    'age' => $request->input('age'),
                    'height' => $request->input('height'),
                    'weight' => $request->input('weight'),
                    'gender' => $request->input('gender'),
                    'date_of_birth' => $request->input('date_of_birth'),
                    'planets_id' => $request->input('planets_id')
                ]);

                return response()->json([
                    'status' => 'OK',
                    'success' => true,
                    'message' => 'Información actualizada correctamente'
                ]);
            } catch (\Throwable $th) {
                return response()->json([
                    'status' => 'ERROR',
                    'success' => false,
                    'message' => 'La información no pudo ser actualizada',
                    'error' => $th
                ]);
            }
        }
        return response()->json([
            'status' => 'ERROR',
            'success' => false,
            'message' => 'La persona solicitada no existe'
        ]);
    }

    /**
     * Función para actualizar el contador
     */
    public function updateCounters(Request $request, $id)
    {
        $persons = Persons::find($id);

        if(isset($persons->planets_id)){
            $planeta = Planets::find($persons->planets_id);
        }

        if ($persons) {
            try {
                $persons->update([
                    'counter' => $persons->counter+1
                ]);

                if($planeta){
                    $planeta->update([
                        'counter' => $planeta->counter+1
                    ]);
                }
             
                return response()->json([
                    'status' => 'OK',
                    'success' => true,
                ]);
            } catch (\Throwable $th) {
                return response()->json([
                    'status' => 'ERROR',
                    'success' => false,
                    'message' => 'La información no pudo ser actualizada',
                    'error' => $th
                ]);
            }
        }
        return response()->json([
            'status' => 'ERROR',
            'success' => false,
            'message' => 'La persona solicitada no existe'
        ]);
    }
    /**
     * Función para eliminar personas de la base de datos
     */
    public function destroy($id)
    {
        $persons = Persons::find($id);

        if ($persons) {
            try {
                $persons->delete();

                return response()->json([
                    'status' => 'OK',
                    'success' => true,
                    'message' => 'Información elminada correctamente'
                ]);
            } catch (\Throwable $th) {
                return response()->json([
                    'status' => 'ERROR',
                    'success' => false,
                    'message' => 'La información no pudo ser eliminada',
                    'error' => $th
                ]);
            }
        }

        return response()->json([
            'status' => 'ERROR',
            'success' => false,
            'message' => 'La persona solicitada no existe'
        ]);
    }
}
