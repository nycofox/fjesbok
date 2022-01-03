<?php

use Illuminate\Support\Facades\Route;

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


//Route::middleware(['auth', 'verified'])->group(function () {
Route::middleware(['auth'])->group(function () {
    Route::get('/', function () {
        return view('pages.home');
    })->name('home');
});

Route::post('thread', [\App\Http\Controllers\ThreadController::class, 'store'])
    ->name('thread')->middleware(['auth', 'verified']);

require 'web/entertainment.php';
