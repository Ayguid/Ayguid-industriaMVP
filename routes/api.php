<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\PublicApiController;
use App\Http\Controllers\EntityController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\UserBookmarkController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
//
//updateUserDetails
Route::post('/me', [AuthController::class, 'me'])->middleware('auth:sanctum');
Route::post('/storeProfilePic', [AuthController::class, 'storeProfilePic'])->middleware('auth:sanctum');
Route::post('/changePassword', [AuthController::class, 'changePassword'])->middleware('auth:sanctum');
Route::post('/updateUserDetails', [AuthController::class, 'updateUserDetails'])->middleware('auth:sanctum');
//
Route::post('/forgot-password', [AuthController::class, 'sendPasswordResetToken']);
Route::post('/reset-password', [AuthController::class, 'resetPassword']);
/*
Route::post('/reset-password-token', [AuthController::class, 'resetPassword']);
Route::post('/forgot-password', [AuthController::class, 'sendPasswordResetToken']);
Route::post('/new-password', [AuthController::class, 'setNewAccountPassword']);
*/

//Public
Route::get('/locations', [PublicApiController::class, 'locations']);
Route::get('/fetchCountries', [PublicApiController::class, 'fetchCountries']);
Route::get('/fetchStates', [PublicApiController::class, 'fetchStates']);
Route::get('/fetchCities', [PublicApiController::class, 'fetchCities']);
//cats
Route::get('/categories', [PublicApiController::class, 'categories']);
//Route::get('/locations', [PublicApiController::class, 'locations']);
//Route::get('/locations', [LocationController::class, 'index']);
//Route::post('/locations', [LocationController::class, 'store']);
//
//public entity listing
Route::get('/entities', [PublicApiController::class, 'entitiesListing']);
Route::get('/entities/{entity:username}', [PublicApiController::class, 'showEntity']);
//
//Entities del user, no son la public api
Route::get('/user/entities', [EntityController::class, 'index'])->middleware('auth:sanctum');
Route::post('/user/entities', [EntityController::class, 'store'])->middleware('auth:sanctum');
Route::put('/user/entities/{entity}', [EntityController::class, 'update'])->middleware('auth:sanctum');
Route::delete('/user/entities/{entity}', [EntityController::class, 'destroy'])->middleware('auth:sanctum');
//Route::post('/storeEntity', [EntityController::class, 'store'])->middleware('auth:sanctum');
//Route::post('/updateEntity/{entity}', [EntityController::class, 'update'])->middleware('auth:sanctum');
Route::post('/bookmarkEntity/{entity}', [UserBookmarkController::class, 'toggle'])->middleware('auth:sanctum');
Route::get('/userBookmarks/{id}', [UserBookmarkController::class, 'userBookmarks']);
//
//POSTS
Route::get('/posts', [PostController::class, 'index']);
Route::post('/posts', [PostController::class, 'store'])->middleware('auth:sanctum');
Route::delete('/posts/{post}', [PostController::class, 'destroy'])->middleware('auth:sanctum');
//Route::put('/posts/{post}', [PostController::class, 'update'])->middleware('auth:sanctum');
//Route::delete('/posts/{post}', [PostController::class, 'destroy'])->middleware('auth:sanctum');




//////////// Admin   //////////////////////////
//materials
//Route::post('/storeMaterial', [AdminController::class, 'storeMaterial'])->middleware('auth:sanctum');
//Route::post('/updateMaterial', [AdminController::class, 'updateMaterial'])->middleware('auth:sanctum');
//processes
//Route::post('/storeProcess', [AdminController::class, 'storeProcess'])->middleware('auth:sanctum');
//Route::post('/updateProcess', [AdminController::class, 'updateProcess'])->middleware('auth:sanctum');
//categories
//Route::post('/storeCategory', [AdminController::class, 'storeCategory'])->middleware('auth:sanctum');
//Route::post('/updateCategory', [AdminController::class, 'updateCategory'])->middleware('auth:sanctum');
