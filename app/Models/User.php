<?php

namespace App\Models;

use App\Traits\HasRoles;
use Carbon\Carbon;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;
use Multicaret\Acquaintances\Traits\CanFavorite;
use Multicaret\Acquaintances\Traits\CanFollow;
use Multicaret\Acquaintances\Traits\CanLike;
use Multicaret\Acquaintances\Traits\CanSubscribe;
use Multicaret\Acquaintances\Traits\CanVote;
use Multicaret\Acquaintances\Traits\Friendable;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasFactory, Notifiable, HasRoles, Friendable;
    use CanFollow, CanLike, CanFavorite, CanSubscribe, CanVote;

    /**
     * Boot the function and create
     */
    public static function boot()
    {
        parent::boot();

        /**
         * Set a slug when a user is being created
         */
        static::creating(function ($user) {
            $user->slug = Str::slug($user->name) . '-' . rand(1000, 9999);
        });
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'slug',
        'email_verified_at'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'slug_changed_at' => 'datetime',
        'last_active_at' => 'datetime',
    ];

    public function getRouteKeyName()
    {
        return 'slug';
    }

    /**
     * A User may have many Posts
     *
     * @return HasMany
     */
    public function posts(): HasMany
    {
        return $this->hasMany(Post::class)->latest();
    }

    /**
     * Returns an URL to the users avatar
     *
     * @return string
     */
    public function getAvatarAttribute(): string
    {
        return "https://www.gravatar.com/avatar/" . md5($this->email) . "?d=monsterid";
    }

    public function getFirstNameAttribute(): string
    {
        return strtok($this->name, " ");
    }

    public function timeline()
    {
        $friends = $this->friends()->pluck('id');

        return Post::whereIn('user_id', $friends)
            ->orWhere('user_id', $this->id)
            ->latest()->paginate(20);
    }

    /**
     * Returns true if the user is currently online
     *
     * @return bool
     */
    public function isOnline(): bool
    {
        return Cache::has('user-online-' . $this->id);
    }

    /**
     * Returns the timestamp for when the user was last active
     *
     * @return Carbon|null
     */
    public function lastActivity(): ?Carbon
    {
        return Cache::get('user-last-activity-' . $this->id);
    }

    /**
     * A User may have many Comments
     *
     * @return HasMany
     */
    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }

    /**
     * A User may have many Votes
     *
     * @return HasMany
     */
    public function votes(): HasMany
    {
        return $this->hasMany(Vote::class);
    }

    /**
     * A User may have many Friends
     *
     */
    public function friends()
    {

    }
}
