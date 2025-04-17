import React from 'react';
import { useForm, usePage } from '@inertiajs/react';

export default function Profile() {
  const { user, posts } = usePage().props;
  const form = useForm({
    bio: user.bio || '',
    profile_photo: null,
  });

  const submit = (e) => {
    e.preventDefault();
    form.post('/profile/update');
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 mt-10">
      <div className="flex items-center space-x-4">
        {user.profile_photo && (
          <img
            src={`/storage/${user.profile_photo}`}
            alt="profile"
            className="w-16 h-16 rounded-full object-cover"
          />
        )}
        <div>
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-sm text-gray-600">@{user.username}</p>
        </div>
      </div>

      <form onSubmit={submit} className="space-y-4">
        <textarea
          value={form.data.bio}
          onChange={(e) => form.setData('bio', e.target.value)}
          className="w-full border rounded p-2"
          placeholder="Je bio"
        />
        <input
          type="file"
          onChange={(e) => form.setData('profile_photo', e.target.files[0])}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Profiel updaten
        </button>
      </form>

      <h3 className="text-xl font-semibold mt-6">📚 Posts van {user.name}</h3>
      {posts.map((post) => (
        <div key={post.id} className="border rounded p-4 mt-2">
          <pre className="bg-gray-100 p-2 rounded">{post.code}</pre>
          <p className="text-sm text-gray-600 mt-1">{post.caption}</p>
        </div>
      ))}
    </div>
  );
}
