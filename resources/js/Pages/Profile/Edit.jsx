import { useForm, Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useState } from 'react';

export default function Edit({ auth, mustVerifyEmail, status }) {
  const user = auth.user;

  const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
    name: user.name || '',
    email: user.email || '',
    bio: user.bio || '',
    profile_photo: null,
    password: '',
    password_confirmation: '',
  });

  const [preview, setPreview] = useState(user.profile_photo ? `/storage/${user.profile_photo}` : null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setData('profile_photo', file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('profile.update'));
  };

  return (
    <AuthenticatedLayout user={user}>
      <Head title="Profiel bewerken" />

      <div className="max-w-xl mx-auto mt-8 space-y-6">
        <h1 className="text-3xl font-bold">🖊️ Bewerk je profiel</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Naam */}
          <div>
            <label className="block font-semibold">Naam</label>
            <input
              type="text"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Bio */}
          <div>
            <label className="block font-semibold">Bio</label>
            <textarea
              value={data.bio}
              onChange={(e) => setData('bio', e.target.value)}
              rows={3}
              className="w-full border rounded px-3 py-2"
            />
            {errors.bio && <p className="text-red-500 text-sm">{errors.bio}</p>}
          </div>

          {/* Profielfoto */}
          <div>
            <label className="block font-semibold">Profielfoto</label>
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="h-20 w-20 rounded-full object-cover mb-2"
              />
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
            />
            {errors.profile_photo && (
              <p className="text-red-500 text-sm">{errors.profile_photo}</p>
            )}
          </div>

          {/* Nieuw wachtwoord */}
          <div>
            <label className="block font-semibold">Nieuw wachtwoord</label>
            <input
              type="password"
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          {/* Bevestig wachtwoord */}
          <div>
            <label className="block font-semibold">Bevestig wachtwoord</label>
            <input
              type="password"
              value={data.password_confirmation}
              onChange={(e) => setData('password_confirmation', e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {/* Opslaan */}
          <button
            type="submit"
            disabled={processing}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            {processing ? 'Opslaan...' : 'Opslaan'}
          </button>

          {recentlySuccessful && (
            <p className="text-green-600 mt-2">✅ Profiel succesvol bijgewerkt!</p>
          )}
        </form>
      </div>
    </AuthenticatedLayout>
  );
}
