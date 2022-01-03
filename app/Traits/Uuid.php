<?php

namespace App\Traits;

use Illuminate\Support\Str;

trait Uuid
{
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            try {
                $model->uuid = (string)Str::uuid(); // generate uuid
            } catch (\Exception $e) {
                abort(500, $e->getMessage());
            }
        });
    }
}
