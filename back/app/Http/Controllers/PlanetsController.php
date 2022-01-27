<?php

namespace App\Http\Controllers;

use App\Models\Persons;
use App\Models\Planets;
use Illuminate\Http\Request;

class PlanetsController extends Controller
{
    /**
     * Función para mostrar todos los planetas registrados en base de datos
     */
    public function index()
    {

        $planets = Planets::withCount(['persons'])->get();

        return response()->json([
            'status' => 'OK',
            'success' => true,
            'planetas' => $planets
        ]);

    }
     /**
     * Función para mostrar todas las personas registradas en ese planeta
     */
    public function getPersonsPlanet($id)
    {

        $planets = Planets::select(
            'planets.*',
            'persons.name'
            )
            ->join('persons', 'persons.planets_id', '=', 'planets.id')
            ->where('planets.id',$id)
            ->get();
        
        return response()->json([
            'status' => 'OK',
            'success' => true,
            'planetas' => $planets
        ]);

    }


    /**
     * Función para crear planetas
     */
    public function create(Request $request)
    {
        try {
            $planets = Planets::create([
                'name' => $request->input('name'),
                'rotationPeriod' => $request->input('rotationPeriod'),
                'diameter' => $request->input('diameter'),
                'weather' => $request->input('weather'),
                'ground' => $request->input('ground')
            ]);
            return response()->json([
                'status' => 'OK',
                'success' => true,
                'message' => 'Planeta registrado correctamente',
                'planeta' => $planets
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 'ERROR',
                'success' => false,
                'message' => 'El planeta no pudo ser registrado',
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
    public function show(Planets $planets)
    {
        //
    }

    /**
     * Función para buscar planetas por medio de su id
     */
    public function edit($id)
    {
        $planets= new Planets;

        $general=$planets->find($id);
        if($general){
            return response()->json([
                'status' => 'OK',
                'success' => true,
                'planeta' => $general
            ]);
        }else{
            return response()->json([
                'status' => 'ERROR',
                'success' => false,
                'message' => 'No existe el planeta solicitado'
            ]);
        } 
    }

    /**
     * Función para actualizar la información de los planetas
     */
    public function update(Request $request, $id)
    {
        $planets = Planets::find($id);

        if ($planets) {
            try {
                $planets->update([
                    'name' => $request->input('name'),
                    'rotationPeriod' => $request->input('rotationPeriod'),
                    'diameter' => $request->input('diameter'),
                    'weather' => $request->input('weather'),
                    'ground' => $request->input('ground')
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
            'message' => 'El planeta solicitado no existe'
        ]);
    }

    /**
     * Función para eliminar planetas de la base de datos
     */
    public function destroy($id)
    {
        $planets = Planets::find($id);

        if ($planets) {
            try {
                $planets->delete();

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
            'message' => 'El planeta solicitado no existe'
        ]);
    }
}
