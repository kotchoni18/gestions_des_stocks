<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use Clicalmani\Foundation\Support\Facades\Route;

/**
 * |-------------------------------------------------------------------------------
 * | Web Routes
 * |-------------------------------------------------------------------------------
 * 
 */

Route::get('/', function () {
    return view('welcome', ['name' => 'John Smith']);
})->name('home');
Route::get('/dashboard', function() {
    return view('dashboard');
});
Route::get('/logout', 'AuthController@login');
Route::post('/login', 'AuthController@login');
Route::post('/register', 'UserController@login');