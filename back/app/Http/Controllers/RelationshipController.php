<?php

namespace App\Http\Controllers;

use App\Models\Relationship;
use Illuminate\Http\Request;

class RelationshipController extends Controller
{
    /**
     * 
     */
    public function index()
    {
        //
    }

    /**
     * Función para crear relaciones entre personas y planetas
     */
    public function create(Request $request)
    {
        try {
            $relationship = Relationship::create([
                'idPerson' => $request->input('idPerson'),
                'idPlanet' => $request->input('idPlanet')
            ]);
            return response()->json([
                'status' => 'OK',
                'success' => true,
                'message' => 'Persona relacionada con el planeta correctamente',
                'relationship' => $relationship
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 'ERROR',
                'success' => false,
                'message' => 'La persona no pudo ser relacionada con el planeta',
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
    public function show(Relationship $relationship)
    {
        //
    }

    /**
     * 
     */
    public function edit(Relationship $relationship)
    {
        //
    }

    /**
     * Función para corregir relaciones entre personas y planetas
     */
    public function update(Request $request, $id)
    {
        $relationship = Relationship::find($id);

        if ($relationship) {
            try {
                $relationship->update([
                    'idPerson' => $request->input('idPerson'),
                    'idPlanet' => $request->input('idPlanet')
                ]);

                return response()->json([
                    'status' => 'OK',
                    'success' => true,
                    'message' => 'Relación actualizada correctamente'
                ]);
            } catch (\Throwable $th) {
                return response()->json([
                    'status' => 'ERROR',
                    'success' => false,
                    'message' => 'La relación no pudo ser actualizada',
                    'error' => $th
                ]);
            }
        }
        return response()->json([
            'status' => 'ERROR',
            'success' => false,
            'message' => 'La relación no existe'
        ]);
    }

    /**
     * Función para eliminar relaciones
     */
    public function destroy($id)
    {
        $relationship = Relationship::find($id);

        if ($relationship) {
            try {
                $relationship->delete();

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
