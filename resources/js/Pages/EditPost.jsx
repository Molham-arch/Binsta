import { useForm, Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function EditPost({ post }) {
  const { data, setData, put, processing, errors } = useForm({
    code: post.code,
    language: post.language,
    caption: post.caption || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    put(route('posts.update', post.id));
  };

  const languages = [
    'javascript',
    'php',
    'python',
    'java',
    'csharp',
    'cpp',
    'html',
    'css',
    'bash',
    'json',
    'typescript',
    'ruby',
    'go',
  ];

  return (
    <AuthenticatedLayout>
      <Head title="Snippet Bewerken" />
      <div className="max-w-3xl mx-auto mt-10 space-y-6">
        <h1 className="text-2xl font-bold">✏️ Snippet Bewerken</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Language Dropdown */}
          <div>
            <label className="block text-sm font-medium">Programmeertaal</label>
            <select
              value={data.language}
              onChange={(e) => setData('language', e.target.value)}
              className="w-full border rounded px-3 py-2"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
            {errors.language && <p className="text-red-500 text-sm">{errors.language}</p>}
          </div>

          {/* Code Input */}
          <div>
            <label className="block text-sm font-medium">Code</label>
            <textarea
              value={data.code}
              onChange={(e) => setData('code', e.target.value)}
              rows="10"
              className="w-full border rounded px-3 py-2 font-mono"
            ></textarea>
            {errors.code && <p className="text-red-500 text-sm">{errors.code}</p>}
          </div>

          {/* Caption */}
          <div>
            <label className="block text-sm font-medium">Caption</label>
            <input
              type="text"
              value={data.caption}
              onChange={(e) => setData('caption', e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
            {errors.caption && <p className="text-red-500 text-sm">{errors.caption}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={processing}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            {processing ? 'Bezig met opslaan...' : 'Opslaan'}
          </button>
        </form>
      </div>
    </AuthenticatedLayout>
  );
}
