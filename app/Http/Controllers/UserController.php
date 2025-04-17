<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public function show(User $user)
    {
        $posts = $user->posts()->withCount('likes')->latest()->get();

        return Inertia::render('Profile', [
            'user' => $user,
            'posts' => $posts,
        ]);
    }

    public function update(Request $request)
    {
        $request->validate([
            'bio' => 'nullable|string|max:1000',
            'profile_photo' => 'nullable|image|max:2048',
        ]);

        $user = auth()->user();

        if ($request->hasFile('profile_photo')) {
            $path = $request->file('profile_photo')->store('profile_photos', 'public');
            $user->profile_photo = $path;
        }

        $user->bio = $request->bio;
        $user->save();

        return back()->with('success', 'Profiel bijgewerkt!');
    }


    public function search(Request $request)
    {
        $query = $request->input('query');

        $users = DB::table('users')
            ->where('username', 'like', "%{$query}%")
            ->orWhere('name', 'like', "%{$query}%")
            ->get();

        return Inertia::render('UserSearchResults', [
            'query' => $query,
            'users' => $users
        ]);
    }

    public function verifyEmail(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email', 'exists:users,email'],
        ]);

        $user = User::where('email', $request->email)->first();

        return redirect()->route('password.change', ['user' => $user->id]);
    }

    public function showChangePasswordForm(User $user)
    {
        return Inertia::render('Auth/ChangePassword', ['userId' => $user->id]);
    }

    public function changePassword(Request $request, User $user)
    {
        $request->validate([
            'password' => 'required|confirmed|min:8',
        ]);

        $user->password = Hash::make($request->password);
        $user->save();

        return redirect()->route('login')->with('status', 'Wachtwoord succesvol aangepast!');
    }
}
