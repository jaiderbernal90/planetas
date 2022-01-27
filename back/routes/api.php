<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PersonsController;
use App\Http\Controllers\PlanetsController;
use App\Http\Controllers\RelationshipController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/
//Rutas para componente personas
$router->group(['prefix' => '/persons'], function ($router) {
    $router->get('index', [PersonsController::class,'index']);
    $router->post('create', [PersonsController::class,'create']);
    $router->get('edit/{id}', [PersonsController::class,'edit']);
    $router->post('update/{id}', [PersonsController::class,'update']);
    $router->delete('destroy/{id}', [PersonsController::class,'destroy']);
});

//Rutas para componente planetas
$router->group(['prefix' => '/planets'], function ($router) {
    $router->get('index', [PlanetsController::class,'index']);
    $router->get('getPersonsPlanet/{id}', [PlanetsController::class,'getPersonsPlanet']);
    $router->post('create', [PlanetsController::class,'create']);
    $router->get('edit/{id}', [PlanetsController::class,'edit']);
    $router->post('update/{id}', [PlanetsController::class,'update']);
    $router->delete('destroy/{id}', [PlanetsController::class,'destroy']);
});

//Rutas para componente relación personas-planetas
$router->group(['prefix' => '/relationship'], function ($router) {
    $router->get('index', [RelationshipController::class,'index']);
    $router->post('create', [RelationshipController::class,'create']);
    $router->get('edit/{id}', [RelationshipController::class,'edit']);
    $router->post('update/{id}', [RelationshipController::class,'update']);
    $router->delete('destroy/{id}', [RelationshipController::class,'destroy']);
});