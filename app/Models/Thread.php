<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Thread extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = [];

    protected $appends = ['edited'];

    protected $with = ['user'];

    /**
     * A Thread belongs to a User
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function replies()
    {
        return $this->hasMany(Reply::class);
    }

    /**
     * Returns true if the post has been edited after submission
     *
     * @return bool
     */
    public function getEditedAttribute(): bool
    {
        return (bool)$this->last_edited_at;
    }
}
