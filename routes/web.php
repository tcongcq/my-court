<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TimeController;

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

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/', [TimeController::class, 'getIndex']);
Route::group(['middleware' => ['web']], function () {
    Route::group([ 'prefix' => 'admin' ], function(){
        Route::resource('filemanager', '\InnoSoft\FileManager\FileManagerController');
        Route::group(['prefix' => 'filemanager'], function() {
            Route::post('create-dir', '\InnoSoft\FileManager\FileManagerController@postCreateDir');
            Route::post('rename', '\InnoSoft\FileManager\FileManagerController@postRename');
            Route::post('upload', '\InnoSoft\FileManager\FileManagerController@postUpload');
            Route::post('save-photo-editor', '\InnoSoft\FileManager\FileManagerController@postSavePhotoEditor');
            Route::post('delete', '\InnoSoft\FileManager\FileManagerController@postDelete');
        });
        Route::any('{paths?}', "\InnoSoft\CMS\CMSController@route")->where('paths', '([A-Za-z0-9\-\/]+)');
    });

    Route::get('/', function () {
        echo 'Frontend template not found - <a href="admin">Backend</a>';
    });
});
