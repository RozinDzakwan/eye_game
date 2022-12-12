<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\FootballController;
use App\Http\Controllers\InstallController;
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


Route::get('/', [FootballController::class, 'index'])->name('login');
// dd('cek');
Route::post('/playgame', [FootballController::class, 'playGame'])->name('playgame');
Route::get('/playgame/result/{score}', [FootballController::class, 'storeScore']);
Route::get('/result/{unique}', [FootballController::class, 'getResult'])->name('result');
Route::get('/reedem', [FootballController::class, 'reedemCode'])->name('reedemcode');
Route::get('/dbimport/{reset?}', [InstallController::class, 'createDB']);
Route::get('/admin', [AdminController::class, 'index']);
Route::post('/admin/export', [AdminController::class, 'printPDF'])->name('printPDF');
// require __DIR__ . '/auth.php';
