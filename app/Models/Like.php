<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    protected $fillable = [
        'user_id',
        'post_id',
    ];

    // 🔁 Relatie met de gebruiker die geliked heeft
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // 🔁 Relatie met de post die geliked is
    public function post()
    {
        return $this->belongsTo(Post::class);
    }
}
