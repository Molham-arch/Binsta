<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function likes()
    {
        return $this->hasMany(Like::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
    public function forkedFrom()
    {
        return $this->belongsTo(Post::class, 'forked_from_post_id');
    }

    public function forks()
    {
        return $this->hasMany(Post::class, 'forked_from_post_id');
    }

    protected $fillable = ['code', 'language', 'caption', 'user_id'];
}