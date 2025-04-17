// import Checkbox from '@/Components/Checkbox';
// import InputError from '@/Components/InputError';
// import InputLabel from '@/Components/InputLabel';
// import PrimaryButton from '@/Components/PrimaryButton';
// import TextInput from '@/Components/TextInput';
// import GuestLayout from '@/Layouts/GuestLayout';
// import { Head, Link, useForm } from '@inertiajs/react';

// export default function Login({ status, canResetPassword }) {
//     const { data, setData, post, processing, errors, reset } = useForm({
//         email: '',
//         password: '',
//         remember: false,
//     });

//     const submit = (e) => {
//         e.preventDefault();

//         post(route('login'), {
//             onFinish: () => reset('password'),
//         });
//     };

//     return (
//         <GuestLayout>
//             <Head title="Log in" />

//             {status && (
//                 <div className="mb-4 text-sm font-medium text-green-600">
//                     {status}
//                 </div>
//             )}

//             <form onSubmit={submit}>
//                 <div>
//                     <InputLabel htmlFor="email" value="Email" />

//                     <TextInput
//                         id="email"
//                         type="email"
//                         name="email"
//                         value={data.email}
//                         className="mt-1 block w-full"
//                         autoComplete="username"
//                         isFocused={true}
//                         onChange={(e) => setData('email', e.target.value)}
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
//                         autoComplete="current-password"
//                         onChange={(e) => setData('password', e.target.value)}
//                     />

//                     <InputError message={errors.password} className="mt-2" />
//                 </div>

//                 <div className="mt-4 block">
//                     <label className="flex items-center">
//                         <Checkbox
//                             name="remember"
//                             checked={data.remember}
//                             onChange={(e) =>
//                                 setData('remember', e.target.checked)
//                             }
//                         />
//                         <span className="ms-2 text-sm text-gray-600">
//                             Remember me
//                         </span>
//                     </label>
//                 </div>

//                 <div className="mt-4 flex items-center justify-end">
//                     {canResetPassword && (
//                         <Link
//                             href={route('password.request')}
//                             className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                         >
//                             Forgot your password?
//                         </Link>
//                     )}

//                     <PrimaryButton className="ms-4" disabled={processing}>
//                         Log in
//                     </PrimaryButton>
//                 </div>
//             </form>
//         </GuestLayout>
//     );
// }

// resources/js/Pages/Auth/Login.jsx

// import { Head, useForm } from '@inertiajs/react';
// import GuestLayout from '@/Layouts/GuestLayout';

// export default function Login() {
//   const { data, setData, post, processing, errors } = useForm({
//     email: '',
//     password: '',
//     remember: false,
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     post(route('login'));
//   };

//   return (
//     <GuestLayout>
//       <Head title="Inloggen" />

//       <h2 className="text-2xl font-semibold mb-4">Welkom terug 👋</h2>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Email
//           </label>
//           <input
//             type="email"
//             value={data.email}
//             onChange={(e) => setData('email', e.target.value)}
//             className="w-full border rounded px-3 py-2 mt-1"
//             required
//           />
//           {errors.email && (
//             <p className="text-red-500 text-sm">{errors.email}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Wachtwoord
//           </label>
//           <input
//             type="password"
//             value={data.password}
//             onChange={(e) => setData('password', e.target.value)}
//             className="w-full border rounded px-3 py-2 mt-1"
//             required
//           />
//           {errors.password && (
//             <p className="text-red-500 text-sm">{errors.password}</p>
//           )}
//         </div>

//         <button
//           type="submit"
//           disabled={processing}
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//         >
//           {processing ? 'Inloggen...' : 'Inloggen'}
//         </button>

//         <div className="text-sm text-center mt-2">
//           Geen account?{' '}
//           <a href={route('register')} className="text-blue-600 hover:underline">
//             Registreer hier
//           </a>
//         </div>
//       </form>
//     </GuestLayout>
//   );
// }

import { useForm, Head } from '@inertiajs/react';

export default function Login() {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  const submit = (e) => {
    e.preventDefault();
    post(route('login'));
  };

  return (
    <>
      <Head title="Inloggen" />
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-100">
        {/* Left side with image */}
        <div className="hidden md:flex items-center justify-center bg-gray-900 text-white">
          <div className="text-center px-8">
            <img
              src="/images/code-snippet.png"
              alt="Code"
              className="w-full max-w-md shadow-lg rounded rotate-2"
            />
            <h2 className="mt-6 text-3xl font-bold">
              Welcome to <span className="text-orange-400">Binsta</span>
            </h2>
            <p className="mt-2 text-gray-400">
              Code, share & connect with other devs!
            </p>
          </div>
        </div>

        {/* Right side with form */}
        <div className="flex items-center justify-center px-6 bg-white">
          <div className="w-full max-w-md space-y-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-blue-600">🔥 Binsta</h1>
              <p className="text-sm text-gray-500">Welkom terug 👋</p>
            </div>

            <form onSubmit={submit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={data.email}
                  onChange={(e) => setData('email', e.target.value)}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.email && (
                  <p className="text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Wachtwoord
                </label>
                <input
                  id="password"
                  type="password"
                  value={data.password}
                  onChange={(e) => setData('password', e.target.value)}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.password && (
                  <p className="text-sm text-red-600">{errors.password}</p>
                )}
              </div>

              <div className="flex justify-between items-center">
                <label className="flex items-center text-sm">
                  <input
                    type="checkbox"
                    checked={data.remember}
                    onChange={(e) => setData('remember', e.target.checked)}
                    className="mr-1"
                  />
                  Onthoud mij
                </label>
                <a
                  href={route('password.request')}
                  className="text-sm text-blue-500 hover:underline"
                >
                  Wachtwoord vergeten?
                </a>
              </div>

              <button
                type="submit"
                disabled={processing}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition"
              >
                {processing ? 'Even wachten...' : 'Inloggen'}
              </button>
            </form>

            <p className="text-sm text-center">
              Geen account?{' '}
              <a
                href={route('register')}
                className="text-blue-600 hover:underline"
              >
                Registreer hier
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
