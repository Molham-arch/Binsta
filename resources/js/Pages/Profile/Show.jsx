// import React, { useState } from 'react';
// import { usePage, router } from '@inertiajs/react';
// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import vscDarkPlus from 'react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus';
// import ConfirmModal from '@/Components/ConfirmModal';

// export default function Show() {
//   const { profileUser, posts } = usePage().props;

//   const [showModal, setShowModal] = useState(false);
//   const [postToDelete, setPostToDelete] = useState(null);

//   const isOwnProfile = usePage().props.auth.user.id === profileUser.id;

//   const handleDelete = (postId) => {
//     setPostToDelete(postId);
//     setShowModal(true);
//   };

//   const confirmDelete = () => {
//     if (postToDelete) {
//       router.delete(route('posts.destroy', postToDelete));
//       setPostToDelete(null);
//     }
//   };

//   return (
//     <AuthenticatedLayout>
//       <div className="max-w-3xl mx-auto mt-10 space-y-6">
//         {/* Profile Header */}
//         <div className="flex items-center gap-4">
//           {profileUser.profile_photo && (
//             <img
//               src={`/storage/${profileUser.profile_photo}`}
//               alt="Profile"
//               className="w-20 h-20 rounded-full object-cover"
//             />
//           )}
//           <div>
//             <h1 className="text-2xl font-bold">{profileUser.name}</h1>
//             <p className="text-gray-600">{profileUser.bio}</p>
//           </div>
//         </div>

//         {/* Snippets Title */}
//         <h2 className="text-xl font-semibold mt-6">📜 Snippets van {profileUser.name}</h2>

//         {/* Snippet Posts */}
//         {posts.length === 0 ? (
//           <p className="text-gray-500">🫥 Geen snippets geplaatst.</p>
//         ) : (
//           posts.map((post) => (
//             <div
//               key={post.id}
//               className="border rounded p-4 bg-white shadow space-y-2 relative"
//             >
//               <SyntaxHighlighter
//                 language={post.language}
//                 style={vscDarkPlus}
//                 customStyle={{ borderRadius: '6px', padding: '1em' }}
//               >
//                 {post.code}
//               </SyntaxHighlighter>

//               {post.caption && (
//                 <p className="italic text-gray-700">💬 {post.caption}</p>
//               )}

//               {/* Only show buttons if it's your own profile */}
//               {isOwnProfile && (
//                 <div className="flex justify-end gap-4 mt-2 text-sm">
//                   <a
//                     href={route('posts.edit', post.id)}
//                     className="text-blue-600 hover:underline"
//                   >
//                     ✏️ Bewerken
//                   </a>
//                   <button
//                     onClick={() => handleDelete(post.id)}
//                     className="text-red-600 hover:underline"
//                   >
//                     🗑️ Verwijderen
//                   </button>
//                 </div>
//               )}
//             </div>
//           ))
//         )}

//         {/* Delete Confirmation Modal */}
//         <ConfirmModal
//           isOpen={showModal}
//           onClose={() => setShowModal(false)}
//           onConfirm={confirmDelete}
//           message="Weet je zeker dat je deze snippet wilt verwijderen?"
//         />
//       </div>
//     </AuthenticatedLayout>
//   );
// }

import React, { useState } from 'react';
import { usePage, Link, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ConfirmModal from '@/Components/ConfirmModal';

export default function Show() {
  const { props } = usePage();
  const { profileUser, posts } = props;
  const authUser = props.auth.user;

  const [showModal, setShowModal] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);
  const [copiedPostId, setCopiedPostId] = useState(null);

  const handleDelete = (postId) => {
    setPostToDelete(postId);
    setShowModal(true);
  };

  const confirmDelete = () => {
    router.delete(route('posts.destroy', postToDelete));
    setShowModal(false);
  };

  const handleCopy = async (code, postId) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedPostId(postId);
      setTimeout(() => setCopiedPostId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleDownload = (code, language, id) => {
    const element = document.createElement('a');
    const file = new Blob([code], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `snippet-${id}.${language}`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <AuthenticatedLayout>
      <div className="max-w-3xl mx-auto mt-10 space-y-6">
        <div className="flex items-center gap-4">
          {profileUser.profile_photo && (
            <img
              src={`/storage/${profileUser.profile_photo}`}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
            />
          )}
          <div>
            <h1 className="text-2xl font-bold">{profileUser.name}</h1>
            <p className="text-gray-600">{profileUser.bio}</p>
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-6">
          🧾 Snippets van {profileUser.name}
        </h2>

        {posts.length === 0 ? (
          <p className="text-gray-500">Geen snippets geplaatst.</p>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className="relative border rounded p-4 bg-white shadow space-y-2"
            >
              <SyntaxHighlighter
                language={post.language}
                style={vscDarkPlus}
                customStyle={{ borderRadius: '6px', padding: '1em' }}
              >
                {post.code}
              </SyntaxHighlighter>

              {post.caption && (
                <p className="italic text-gray-700">💬 {post.caption}</p>
              )}

              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => handleCopy(post.code, post.id)}
                  className="text-sm px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  {copiedPostId === post.id ? '✅ Gekopieerd!' : '📋 Kopiëren'}
                </button>

                <button
                  onClick={() =>
                    handleDownload(post.code, post.language, post.id)
                  }
                  className="text-sm px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                  💾 Opslaan
                </button>

                {authUser.id === post.user_id && (
                  <>
                    <Link
                      href={route('posts.edit', post.id)}
                      className="text-sm px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                    >
                      ✏️ Bewerken
                    </Link>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="text-sm px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
                    >
                      🗑️ Verwijderen
                    </button>
                  </>
                )}
              </div>
            </div>
          ))
        )}

        <ConfirmModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onConfirm={confirmDelete}
          message="Weet je zeker dat je deze snippet wilt verwijderen?"
        />
      </div>
    </AuthenticatedLayout>
  );
}
