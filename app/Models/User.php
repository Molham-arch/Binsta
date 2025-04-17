<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'bio',
        'profile_photo', 
    ];

    /**
     * The attributes that should be hidden for arrays.
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * A user can have many posts.
     */
    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    /**
     * A user can have many comments.
     */
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    /**
     * A user can like many posts.
     */
    public function likes()
    {
        return $this->hasMany(Like::class);
    }
}
