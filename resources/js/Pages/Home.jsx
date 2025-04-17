// import React, { useState, useEffect } from 'react';
// import { usePage, router, Head, Link } from '@inertiajs/react';
// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import vscDarkPlus from 'react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus';
// import solarizedlight from 'react-syntax-highlighter/dist/esm/styles/prism/solarizedlight';
// import funky from 'react-syntax-highlighter/dist/esm/styles/prism/funky';
// import twilight from 'react-syntax-highlighter/dist/esm/styles/prism/twilight';

// import dayjs from 'dayjs';
// import relativeTime from 'dayjs/plugin/relativeTime';
// dayjs.extend(relativeTime);


import React, { useState, useEffect } from 'react';
import { usePage, router, Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { funky } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { twilight } from 'react-syntax-highlighter/dist/esm/styles/prism';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);


export default function Home() {
  const { props } = usePage();
  const posts = props.posts || [];
  const authUser = props.auth.user;

  const themeStyles = {
    default: vscDarkPlus,
    light: solarizedlight,
    dark: vscDarkPlus,
    funky: funky,
    twilight: twilight,
  };

  const [commentInputs, setCommentInputs] = useState({});

  const handleLike = (postId) => {
    router.post(`/posts/${postId}/like`, {}, { preserveScroll: true });
  };

  const handleCommentChange = (postId, value) => {
    setCommentInputs({ ...commentInputs, [postId]: value });
  };

  const handleCommentSubmit = (e, postId) => {
    e.preventDefault();
    const content = commentInputs[postId];
    if (content && content.trim()) {
      router.post(
        `/posts/${postId}/comment`,
        { content },
        {
          preserveScroll: true,
          onSuccess: () => {
            setCommentInputs({ ...commentInputs, [postId]: '' });
          },
        }
      );
    }
  };

  return (
    <AuthenticatedLayout>
      <Head title="Home" />

      <div className="max-w-3xl mx-auto mt-10 space-y-6">
        <h1 className="text-3xl font-bold">🔥 Binsta Feed</h1>

        <Link
          href={route('posts.create')}
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded shadow transition"
        >
          + Nieuwe Snippet
        </Link>

        <form action="/search" method="GET" className="mb-4">
          <input
            type="text"
            name="query"
            placeholder="Zoek gebruiker..."
            className="border rounded px-3 py-2 w-full"
          />
        </form>

        {posts.length === 0 ? (
          <p className="text-gray-500">
            Nog geen posts. Maak je eerste snippet!
          </p>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className="border rounded-lg p-4 shadow bg-white space-y-2"
            >
              <div className="flex items-center justify-between mb-2">
                <Link
                  href={route('profile.show', post.user.id)}
                  className="flex items-center gap-2 hover:underline"
                >
                  {post.user.profile_photo && (
                    <img
                      src={`/storage/${post.user.profile_photo}`}
                      alt="pfp"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <span className="font-semibold block">
                      {post.user.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      {dayjs(post.created_at).fromNow()}
                    </span>
                  </div>
                </Link>

                <button
                  onClick={() => handleLike(post.id)}
                  className="text-sm text-red-600 hover:underline"
                >
                  ❤️ {post.likes_count} Like{post.likes_count !== 1 ? 's' : ''}
                </button>
              </div>

              {/* Snippet */}
              <SyntaxHighlighter
                language={post.language}
                style={themeStyles[post.theme] || themeStyles.default}
                customStyle={{
                  borderRadius: '8px',
                  padding: '1em',
                  fontSize: '0.95rem',
                }}
              >
                {post.code}
              </SyntaxHighlighter>

              {/* Caption */}
              {post.caption && (
                <p className="mt-1 text-sm text-gray-700 italic">
                  💬 {post.caption}
                </p>
              )}

              {/* Fork Button */}
              <button
                onClick={() => router.post(`/posts/${post.id}/fork`)}
                className="text-sm text-purple-600 hover:underline"
              >
                🔁 Fork deze snippet
              </button>

              {/* Comment Form */}
              <form
                onSubmit={(e) => handleCommentSubmit(e, post.id)}
                className="mt-2"
              >
                <input
                  type="text"
                  placeholder="Schrijf een reactie..."
                  className="w-full border rounded px-3 py-1"
                  value={commentInputs[post.id] || ''}
                  onChange={(e) => handleCommentChange(post.id, e.target.value)}
                />
              </form>

              {/* Comments */}
              {post.comments.length > 0 && (
                <div className="mt-2 space-y-1">
                  {post.comments.map((comment) => (
                    <div key={comment.id} className="text-sm text-gray-800">
                      <span className="font-semibold">
                        {comment.user.name}:
                      </span>{' '}
                      {comment.content}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </AuthenticatedLayout>
  );
}
