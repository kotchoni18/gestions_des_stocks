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


Route::get('/', function() {
    return view('dashboard');
})->name('dashboard');

Route::get('/dashboard', function () {
    return view('dashboard-agent');
})->name('dashboard-agent');

Route::get('/logout', 'AuthController@login');
Route::post('/login', 'AuthController@login');
