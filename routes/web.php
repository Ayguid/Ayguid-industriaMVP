<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Tester;
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


Route::get('/test',  [Tester::class, 'data']);

//->middleware('admin')
Route::prefix('superadmin')->group(function () {
    Route::get('/{any?}', function () {
        return view('superadmin');
    })->middleware('super-admin')->name('superadminPanel')->where(['any' => '.*']);
});


Route::get('/{any?}', function () {
    return view('landing');
})->where(['any' => '.*']);

/*
Route::get('/', function () {
    return view('landing');
});
*/
