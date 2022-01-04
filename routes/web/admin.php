<?php

/**
 * Admin backend
 */
Route::middleware('role:admin')->group(function () {

    Route::get('/admin', [\App\Http\Controllers\Admin\DashboardController::class, 'index'])
        ->name('admin.index');

});
