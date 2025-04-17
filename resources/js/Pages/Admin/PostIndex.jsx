import React from 'react';
import { router, usePage } from '@inertiajs/react';

export default function PostIndex() {
  const { posts } = usePage().props;

  const handleDelete = (id) => {
    if (confirm('Weet je zeker dat je deze post wilt verwijderen?')) {
      router.delete(`/admin/posts/${id}`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 space-y-4">
      <h1 className="text-2xl font-bold">📋 Alle Snippets (Admin)</h1>

      {posts.map((post) => (
        <div key={post.id} className="border p-4 rounded shadow bg-white">
          <div className="flex justify-between items-center mb-2">
            <div>
              <p className="font-semibold">{post.user.name}</p>
              <p className="text-sm text-gray-500">{post.caption}</p>
            </div>
            <button
              onClick={() => handleDelete(post.id)}
              className="text-red-600 hover:underline text-sm"
            >
              🗑️ Verwijderen
            </button>
          </div>

          <pre className="bg-gray-100 p-2 rounded overflow-x-auto text-sm">
            {post.code}
          </pre>
        </div>
      ))}
    </div>
  );
}
