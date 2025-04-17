import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  vscDarkPlus,
  solarizedlight,
  funky,
  twilight,
} from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Archive() {
  const { posts } = usePage().props;

  const themeStyles = {
    default: vscDarkPlus,
    dark: vscDarkPlus,
    light: solarizedlight,
    funky,
    twilight,
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 space-y-6">
      <h1 className="text-3xl font-bold">📂 Snippet Archief</h1>
      <p className="text-gray-600">Bekijk de nieuwste openbare snippets</p>

      {posts.length === 0 && (
        <p className="text-gray-500">
          Er zijn nog geen snippets in het archief.
        </p>
      )}

      {posts.map((post) => (
        <div key={post.id} className="border rounded-lg p-4 bg-white shadow">
          <div className="flex items-center gap-2 mb-2">
            {post.user.profile_photo && (
              <img
                src={`/storage/${post.user.profile_photo}`}
                alt="pfp"
                className="w-8 h-8 rounded-full object-cover"
              />
            )}
            <Link
              href={`/users/${post.user.id}`}
              className="font-semibold hover:underline"
            >
              {post.user.name}
            </Link>
          </div>

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

          {post.caption && (
            <p className="mt-1 text-sm text-gray-700 italic">
              💬 {post.caption}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
