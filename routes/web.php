 <?php

    // use App\Http\Middleware\AdminMiddleware;
    // use App\Http\Controllers\PostController;
    // use App\Http\Controllers\ProfileController;
    // use App\Http\Controllers\LikeController;
    // use App\Http\Controllers\CommentController;
    // use App\Http\Controllers\UserController;
    // use Illuminate\Foundation\Application;
    // use Illuminate\Support\Facades\Route;
    // use Inertia\Inertia;

    // Route::get('/', function () {
    //     return redirect()->route('login');
    // });

    // Route::middleware(['auth', 'verified'])->get('/dashboard', function () {
    //     return Inertia::render('Dashboard');
    // })->name('dashboard');

    // // ✅ PUBLIC archive
    // Route::get('/archive', [PostController::class, 'archive'])->name('posts.archive');

    // Route::middleware('auth')->group(function () {
    //     // 🧑 Profile
    //     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    //     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    //     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    //     // 🔥 Binsta main
    //     Route::get('/home', [PostController::class, 'index'])->name('home');
    //     Route::get('/posts/create', [PostController::class, 'create'])->name('posts.create');
    //     Route::post('/posts', [PostController::class, 'store'])->name('posts.store');
    //     Route::post('/posts/{post}/like', [LikeController::class, 'toggle'])->name('posts.like');
    //     Route::post('/posts/{post}/comment', [CommentController::class, 'store'])->name('posts.comment');
    //     Route::post('/posts/{post}/fork', [PostController::class, 'fork'])->name('posts.fork');

    //     // 👤 User stuff
    //     Route::get('/users/{user}', [UserController::class, 'show'])->name('users.show');
    //     Route::get('/profile/{user}', [ProfileController::class, 'show'])->name('profile.show');

    //     Route::post('/profile/update', [UserController::class, 'update'])->name('profile.update');
    //     Route::get('/search', [UserController::class, 'search'])->name('users.search');

    //     // 👮 Admin
    //     Route::middleware(['auth', AdminMiddleware::class])->prefix('admin')->group(function () {
    //         Route::get('/posts', [PostController::class, 'adminIndex'])->name('admin.posts.index');
    //         Route::delete('/posts/{post}', [PostController::class, 'destroy'])->name('admin.posts.destroy');
    //     });
    // });

    // require __DIR__ . '/auth.php';







    use App\Http\Controllers\CommentController;
    use App\Http\Controllers\LikeController;
    use App\Http\Controllers\PostController;
    use App\Http\Controllers\ProfileController;
    use App\Http\Controllers\UserController;
    use App\Http\Middleware\AdminMiddleware;
    use Illuminate\Support\Facades\Route;
    use Inertia\Inertia;

    // 🔗 Redirect root to login
    Route::get('/', fn() => redirect()->route('login'));

    // 📦 Dashboard (default Breeze)
    Route::middleware(['auth', 'verified'])->get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    // 📁 Public archive
    Route::get('/archive', [PostController::class, 'archive'])->name('posts.archive');

    // 🔐 Authenticated user routes
    Route::middleware('auth')->group(function () {
        // 👤 Profile management
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
        Route::get('/profile/{user}', [ProfileController::class, 'show'])->name('profile.show');
        Route::post('/profile/update', [UserController::class, 'update'])->name('profile.update');

        // 🔥 Binsta: Snippets
        Route::get('/home', [PostController::class, 'index'])->name('home');
        Route::get('/posts/create', [PostController::class, 'create'])->name('posts.create');
        Route::post('/posts', [PostController::class, 'store'])->name('posts.store');
        Route::post('/posts/{post}/like', [LikeController::class, 'toggle'])->name('posts.like');
        Route::post('/posts/{post}/comment', [CommentController::class, 'store'])->name('posts.comment');
        Route::post('/posts/{post}/fork', [PostController::class, 'fork'])->name('posts.fork');

        // New

        Route::get('/posts/{post}/edit', [PostController::class, 'edit'])->name('posts.edit');
        Route::put('/posts/{post}', [PostController::class, 'update'])->name('posts.update');
        Route::delete('/posts/{post}', [PostController::class, 'destroy'])->name('posts.destroy');

        // 👥 User interactions
        Route::get('/users/{user}', [UserController::class, 'show'])->name('users.show');
        Route::get('/search', [UserController::class, 'search'])->name('users.search');

        // 🛡️ Admin area
        Route::middleware([AdminMiddleware::class])->prefix('admin')->group(function () {
            Route::get('/posts', [PostController::class, 'adminIndex'])->name('admin.posts.index');
            Route::delete('/posts/{post}', [PostController::class, 'destroy'])->name('admin.posts.destroy');
        });
    });

    // 🔑 Custom Binsta password
    Route::post('/forgot-password/verify', [UserController::class, 'verifyEmail'])->name('password.verifyEmail');
    Route::get('/reset-password/{user}', [UserController::class, 'showChangePasswordForm'])->name('password.change');
    Route::post('/reset-password/{user}', [UserController::class, 'changePassword'])->name('password.change.submit');

    // Breeze auth routes
    require __DIR__ . '/auth.php';