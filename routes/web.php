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

Route::get('/', function () {
    return view('welcome');
});


Route::get('/clear-cache', function() {
    $run = Artisan::call('config:clear');
    $run = Artisan::call('cache:clear');
    $run = Artisan::call('config:cache');
    return 'FINISHED SUCCESSFULLY';  
});

Route::get('/mine-db', function() {
    try {
        DB::connection()->getPdo();
        if(DB::connection()->getDatabaseName()) {
            echo "Yes! Successfully Connected to the DB: " . DB::connection()->getDatabaseName();
        }else {
            die("could not find the database");
        }
    } catch (\Exception $e) {
        die("could not open connection to database server");
    }
});

Route::get('/info', function() { phpinfo(); });