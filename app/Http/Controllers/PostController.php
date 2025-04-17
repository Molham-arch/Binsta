<?php

// namespace App\Http\Controllers;

// use Illuminate\Http\Request;
// use Inertia\Inertia;
// use App\Models\Post;

// class PostController extends Controller
// {
//     public function index()
//     {
//         $posts = Post::with(['user', 'likes', 'comments.user'])
//             ->withCount('likes')
//             ->latest()
//             ->get();

//         return Inertia::render('Home', [
//             'posts' => $posts
//         ]);
//     }


//     public function create()
//     {
//         return Inertia::render('CreatePost');
//     }

//     public function store(Request $request)
//     {
//         $request->validate([
//             'code' => 'required|string',
//             'language' => 'required|string|max:20',
//             'caption' => 'nullable|string|max:255',
//         ]);

//         Post::create([
//             'user_id' => auth()->id(),
//             'code' => $request->code,
//             'language' => $request->language,
//             'caption' => $request->caption,
//         ]);

//         return redirect()->route('home');
//     }




//     public function fork(Post $post)
//     {
//         $newPost = auth()->user()->posts()->create([
//             'code' => $post->code,
//             'language' => $post->language,
//             'theme' => $post->theme,
//             'caption' => '✨ Forked from @' . $post->user->username,
//             'forked_from_post_id' => $post->id,
//         ]);

//         return redirect()->route('home')->with('success', 'Post geforkt!');
//     }


//     public function adminIndex()
//     {
//         $posts = Post::with('user')->latest()->get();

//         return Inertia::render('Admin/PostIndex', [
//             'posts' => $posts,
//         ]);
//     }

//     public function destroy(Post $post)
//     {
//         $post->delete();

//         return back()->with('success', 'Post verwijderd!');
//     }
//     public function archive()
//     {
//         $posts = Post::with('user')->latest()->take(50)->get();

//         return Inertia::render('Archive', [
//             'posts' => $posts,
//         ]);
//     }
// }





namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::with(['user', 'likes', 'comments.user'])
            ->withCount('likes')
            ->latest()
            ->get();

        return Inertia::render('Home', [
            'posts' => $posts
        ]);
    }

    public function create()
    {
        return Inertia::render('CreatePost');
    }

    public function store(Request $request)
    {
        $request->validate([
            'code' => 'required|string',
            'language' => 'required|string|max:20',
            'caption' => 'nullable|string|max:255',
        ]);

        Post::create([
            'user_id' => auth()->id(),
            'code' => $request->code,
            'language' => $request->language,
            'caption' => $request->caption,
        ]);

        return redirect()->route('home');
    }

    public function edit(Post $post)
    {
        // ⛔ Only allow the owner to edit
        if ($post->user_id !== auth()->id()) {
            abort(403, 'Unauthorized');
        }

        return Inertia::render('EditPost', [
            'post' => $post
        ]);
    }

    public function update(Request $request, Post $post)
    {
        // ⛔ Only allow the owner to update
        if ($post->user_id !== auth()->id()) {
            abort(403, 'Unauthorized');
        }

        $request->validate([
            'code' => 'required|string',
            'language' => 'required|string|max:20',
            'caption' => 'nullable|string|max:255',
        ]);

        $post->update([
            'code' => $request->code,
            'language' => $request->language,
            'caption' => $request->caption,
        ]);

        return redirect()->route('profile.show', auth()->id())->with('success', 'Post bijgewerkt!');
    }

    public function fork(Post $post)
    {
        $newPost = auth()->user()->posts()->create([
            'code' => $post->code,
            'language' => $post->language,
            'theme' => $post->theme,
            'caption' => '✨ Forked from @' . $post->user->username,
            'forked_from_post_id' => $post->id,
        ]);

        return redirect()->route('home')->with('success', 'Post geforkt!');
    }

    public function destroy(Post $post)
    {
        // ⛔ Only allow the owner or admin
        if ($post->user_id !== auth()->id()) {
            abort(403, 'Unauthorized');
        }

        $post->delete();

        return back()->with('success', 'Post verwijderd!');
    }

    public function adminIndex()
    {
        $posts = Post::with('user')->latest()->get();

        return Inertia::render('Admin/PostIndex', [
            'posts' => $posts,
        ]);
    }

    public function archive()
    {
        $posts = Post::with('user')->latest()->take(50)->get();

        return Inertia::render('Archive', [
            'posts' => $posts,
        ]);
    }
}