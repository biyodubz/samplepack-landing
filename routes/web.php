<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\LeadController;

Route::get('/', function () {
    return view('landing');
});

Route::post('/subscribe', [LeadController::class, 'store']);
