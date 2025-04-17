import React from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function UserSearchResults() {
  const { users, query } = usePage().props;

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4">
        Zoekresultaten voor: "{query}"
      </h2>

      {users.length === 0 && <p>Geen gebruikers gevonden.</p>}

      {users.map((user) => (
        <Link
          key={user.id}
          href={`/users/${user.id}`}
          className="block p-2 border rounded mb-2 hover:bg-gray-100"
        >
          <div className="flex items-center gap-3">
            {user.profile_photo && (
              <img
                src={`/storage/${user.profile_photo}`}
                alt="pfp"
                className="w-10 h-10 rounded-full object-cover"
              />
            )}
            <div>
              <p className="font-bold">{user.name}</p>
              <p className="text-sm text-gray-500">@{user.username}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
