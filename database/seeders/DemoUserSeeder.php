<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Post;
use Illuminate\Support\Facades\Hash;

class DemoUserSeeder extends Seeder
{
    public function run(): void
    {
        $user = User::create([
            'name' => 'Molham Alam',
            'username' => 'molham',
            'email' => 'molham@gmail.com',
            'password' => Hash::make('123'),
            'bio' => 'Coder 💻 | Laravel + React',
            'profile_photo' => 'profile_photos/molham.jpg', //  in /public/storage/profile-photos
        ]);

        Post::factory(5)->create([
            'user_id' => $user->id,
        ]);
    }
}
