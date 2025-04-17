// import InputError from '@/Components/InputError';
// import InputLabel from '@/Components/InputLabel';
// import PrimaryButton from '@/Components/PrimaryButton';
// import TextInput from '@/Components/TextInput';
// import GuestLayout from '@/Layouts/GuestLayout';
// import { Head, Link, useForm } from '@inertiajs/react';

// export default function Register() {
//     const { data, setData, post, processing, errors, reset } = useForm({
//         name: '',
//         email: '',
//         password: '',
//         password_confirmation: '',
//     });

//     const submit = (e) => {
//         e.preventDefault();

//         post(route('register'), {
//             onFinish: () => reset('password', 'password_confirmation'),
//         });
//     };

//     return (
//         <GuestLayout>
//             <Head title="Register" />

//             <form onSubmit={submit}>
//                 <div>
//                     <InputLabel htmlFor="name" value="Name" />

//                     <TextInput
//                         id="name"
//                         name="name"
//                         value={data.name}
//                         className="mt-1 block w-full"
//                         autoComplete="name"
//                         isFocused={true}
//                         onChange={(e) => setData('name', e.target.value)}
//                         required
//                     />

//                     <InputError message={errors.name} className="mt-2" />
//                 </div>

//                 <div className="mt-4">
//                     <InputLabel htmlFor="email" value="Email" />

//                     <TextInput
//                         id="email"
//                         type="email"
//                         name="email"
//                         value={data.email}
//                         className="mt-1 block w-full"
//                         autoComplete="username"
//                         onChange={(e) => setData('email', e.target.value)}
//                         required
//                     />

//                     <InputError message={errors.email} className="mt-2" />
//                 </div>

//                 <div className="mt-4">
//                     <InputLabel htmlFor="password" value="Password" />

//                     <TextInput
//                         id="password"
//                         type="password"
//                         name="password"
//                         value={data.password}
//                         className="mt-1 block w-full"
//                         autoComplete="new-password"
//                         onChange={(e) => setData('password', e.target.value)}
//                         required
//                     />

//                     <InputError message={errors.password} className="mt-2" />
//                 </div>

//                 <div className="mt-4">
//                     <InputLabel
//                         htmlFor="password_confirmation"
//                         value="Confirm Password"
//                     />

//                     <TextInput
//                         id="password_confirmation"
//                         type="password"
//                         name="password_confirmation"
//                         value={data.password_confirmation}
//                         className="mt-1 block w-full"
//                         autoComplete="new-password"
//                         onChange={(e) =>
//                             setData('password_confirmation', e.target.value)
//                         }
//                         required
//                     />

//                     <InputError
//                         message={errors.password_confirmation}
//                         className="mt-2"
//                     />
//                 </div>

//                 <div className="mt-4 flex items-center justify-end">
//                     <Link
//                         href={route('login')}
//                         className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                     >
//                         Already registered?
//                     </Link>

//                     <PrimaryButton className="ms-4" disabled={processing}>
//                         Register
//                     </PrimaryButton>
//                 </div>
//             </form>
//         </GuestLayout>
//     );
// }

///////////////////////////

// import InputError from '@/Components/InputError';
// import InputLabel from '@/Components/InputLabel';
// import PrimaryButton from '@/Components/PrimaryButton';
// import TextInput from '@/Components/TextInput';
// import GuestLayout from '@/Layouts/GuestLayout';
// import { Head, Link, useForm } from '@inertiajs/react';

// export default function Register() {
//   const { data, setData, post, processing, errors, reset } = useForm({
//     name: '',
//     email: '',
//     username: '', // ✅ added
//     password: '',
//     password_confirmation: '',
//   });

//   const submit = (e) => {
//     e.preventDefault();

//     post(route('register'), {
//       onFinish: () => reset('password', 'password_confirmation'),
//     });
//   };

//   return (
//     <GuestLayout>
//       <Head title="Register" />

//       <form onSubmit={submit}>
//         <div>
//           <InputLabel htmlFor="name" value="Name" />
//           <TextInput
//             id="name"
//             name="name"
//             value={data.name}
//             className="mt-1 block w-full"
//             autoComplete="name"
//             isFocused={true}
//             onChange={(e) => setData('name', e.target.value)}
//             required
//           />
//           <InputError message={errors.name} className="mt-2" />
//         </div>

//         {/* ✅ Username input */}
//         <div className="mt-4">
//           <InputLabel htmlFor="username" value="Username" />
//           <TextInput
//             id="username"
//             name="username"
//             value={data.username}
//             className="mt-1 block w-full"
//             autoComplete="username"
//             onChange={(e) => setData('username', e.target.value)}
//             required
//           />
//           <InputError message={errors.username} className="mt-2" />
//         </div>

//         <div className="mt-4">
//           <InputLabel htmlFor="email" value="Email" />
//           <TextInput
//             id="email"
//             type="email"
//             name="email"
//             value={data.email}
//             className="mt-1 block w-full"
//             autoComplete="email"
//             onChange={(e) => setData('email', e.target.value)}
//             required
//           />
//           <InputError message={errors.email} className="mt-2" />
//         </div>

//         <div className="mt-4">
//           <InputLabel htmlFor="password" value="Password" />
//           <TextInput
//             id="password"
//             type="password"
//             name="password"
//             value={data.password}
//             className="mt-1 block w-full"
//             autoComplete="new-password"
//             onChange={(e) => setData('password', e.target.value)}
//             required
//           />
//           <InputError message={errors.password} className="mt-2" />
//         </div>

//         <div className="mt-4">
//           <InputLabel
//             htmlFor="password_confirmation"
//             value="Confirm Password"
//           />
//           <TextInput
//             id="password_confirmation"
//             type="password"
//             name="password_confirmation"
//             value={data.password_confirmation}
//             className="mt-1 block w-full"
//             autoComplete="new-password"
//             onChange={(e) => setData('password_confirmation', e.target.value)}
//             required
//           />
//           <InputError message={errors.password_confirmation} className="mt-2" />
//         </div>

//         <div className="mt-4 flex items-center justify-end">
//           <Link
//             href={route('login')}
//             className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//           >
//             Already registered?
//           </Link>

//           <PrimaryButton className="ms-4" disabled={processing}>
//             Register
//           </PrimaryButton>
//         </div>
//       </form>
//     </GuestLayout>
//   );
// }

// resources/js/Pages/Auth/Register.jsx
import { Head, useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Register() {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    username: '', // ✅ Added
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('register'));
  };

  return (
    <GuestLayout>
      <Head title="Registreren" />

      <h2 className="text-2xl font-semibold mb-4">👋 Maak een account aan</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Naam</label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1"
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Gebruikersnaam</label>
          <input
            type="text"
            value={data.username}
            onChange={(e) => setData('username', e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1"
            required
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => setData('email', e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1"
            required
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Wachtwoord</label>
          <input
            type="password"
            value={data.password}
            onChange={(e) => setData('password', e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1"
            required
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Bevestig wachtwoord</label>
          <input
            type="password"
            value={data.password_confirmation}
            onChange={(e) => setData('password_confirmation', e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1"
            required
          />
        </div>

        <button
          type="submit"
          disabled={processing}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {processing ? 'Registreren...' : 'Registreren'}
        </button>

        <div className="text-sm text-center mt-2">
          Al een account?{' '}
          <a href={route('login')} className="text-blue-600 hover:underline">
            Log in
          </a>
        </div>
      </form>
    </GuestLayout>
  );
}
