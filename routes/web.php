<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome');
});
Route::get('/login',[AuthController::class,'login']);
Route::post('/login',[AuthController::class,'login_post']);
Route::get('/register',[AuthController::class,'register']);
Route::post('/register',[AuthController::class, 'register_post']);
Route::post('/logout',[AuthController::class,'logout']);

Route::get('/profile',[HomeController::class,'profile']);

Route::post('/change_photo',[UserController::class,'change_photo']);