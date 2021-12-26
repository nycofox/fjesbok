<?php

/**
 * Webcomics frontend
 */
Route::middleware('role:webcomics')->group(function () {
//        Route::get('/webcomics/index', [\App\Http\Controllers\WebcomicController::class, 'index'])
//            ->name('webcomics.index');
    Route::get('/webcomics/{date?}', [\App\Http\Controllers\Entertainment\WebcomicController::class, 'show'])
        ->name('webcomics.show');
});
