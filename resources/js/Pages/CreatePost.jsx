import React from 'react';
import { useForm, Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function CreatePost() {
  const { data, setData, post, processing, errors, reset } = useForm({
    code: '',
    language: 'javascript',
    caption: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/posts', {
      onSuccess: () => reset(),
    });
  };

  return (
    <AuthenticatedLayout>
      <Head title="Nieuwe Code Snippet" />

      <div className="max-w-3xl mx-auto mt-10 space-y-6">
        <h1 className="text-2xl font-bold">📝 Nieuwe Code Snippet</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Code input */}
          <textarea
            className="w-full border rounded p-3"
            rows="10"
            placeholder="Voer hier je code in..."
            value={data.code}
            onChange={(e) => setData('code', e.target.value)}
          />
          {errors.code && <p className="text-red-500">{errors.code}</p>}

          {/* Language selector */}
          <select
            className="border rounded p-2"
            value={data.language}
            onChange={(e) => setData('language', e.target.value)}
          >
            <option value="javascript">JavaScript</option>
            <option value="php">PHP</option>
            <option value="python">Python</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
          </select>

          {/* Optional caption */}
          <input
            type="text"
            className="w-full border rounded p-2"
            placeholder="Caption (optioneel)"
            value={data.caption}
            onChange={(e) => setData('caption', e.target.value)}
          />

          <button
            type="submit"
            disabled={processing}
            className="bg-indigo-600 text-white px-4 py-2 rounded"
          >
            Post Snippet
          </button>
        </form>
      </div>
    </AuthenticatedLayout>
  );
}
