<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('/paginate')->name('paginate.')->namespace('App\Http\Controllers')->controller(UserController::class)->group(function () {
    Route::get('/', 'index')->name('index');
    Route::get('/simple', 'simple')->name('simple');
    Route::get('/cursor', 'cursor')->name('cursor');
    Route::get('/cursor-tope', 'cursorTope')->name('cursor_tope');
});