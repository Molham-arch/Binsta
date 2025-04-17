// // import InputError from '@/Components/InputError';
// // import InputLabel from '@/Components/InputLabel';
// // import PrimaryButton from '@/Components/PrimaryButton';
// // import TextInput from '@/Components/TextInput';
// // import GuestLayout from '@/Layouts/GuestLayout';
// // import { Head, useForm } from '@inertiajs/react';

// // export default function ResetPassword({ token, email }) {
// //     const { data, setData, post, processing, errors, reset } = useForm({
// //         token: token,
// //         email: email,
// //         password: '',
// //         password_confirmation: '',
// //     });

// //     const submit = (e) => {
// //         e.preventDefault();

// //         post(route('password.store'), {
// //             onFinish: () => reset('password', 'password_confirmation'),
// //         });
// //     };

// //     return (
// //         <GuestLayout>
// //             <Head title="Reset Password" />

// //             <form onSubmit={submit}>
// //                 <div>
// //                     <InputLabel htmlFor="email" value="Email" />

// //                     <TextInput
// //                         id="email"
// //                         type="email"
// //                         name="email"
// //                         value={data.email}
// //                         className="mt-1 block w-full"
// //                         autoComplete="username"
// //                         onChange={(e) => setData('email', e.target.value)}
// //                     />

// //                     <InputError message={errors.email} className="mt-2" />
// //                 </div>

// //                 <div className="mt-4">
// //                     <InputLabel htmlFor="password" value="Password" />

// //                     <TextInput
// //                         id="password"
// //                         type="password"
// //                         name="password"
// //                         value={data.password}
// //                         className="mt-1 block w-full"
// //                         autoComplete="new-password"
// //                         isFocused={true}
// //                         onChange={(e) => setData('password', e.target.value)}
// //                     />

// //                     <InputError message={errors.password} className="mt-2" />
// //                 </div>

// //                 <div className="mt-4">
// //                     <InputLabel
// //                         htmlFor="password_confirmation"
// //                         value="Confirm Password"
// //                     />

// //                     <TextInput
// //                         type="password"
// //                         id="password_confirmation"
// //                         name="password_confirmation"
// //                         value={data.password_confirmation}
// //                         className="mt-1 block w-full"
// //                         autoComplete="new-password"
// //                         onChange={(e) =>
// //                             setData('password_confirmation', e.target.value)
// //                         }
// //                     />

// //                     <InputError
// //                         message={errors.password_confirmation}
// //                         className="mt-2"
// //                     />
// //                 </div>

// //                 <div className="mt-4 flex items-center justify-end">
// //                     <PrimaryButton className="ms-4" disabled={processing}>
// //                         Reset Password
// //                     </PrimaryButton>
// //                 </div>
// //             </form>
// //         </GuestLayout>
// //     );
// // }





// import { Head, useForm } from '@inertiajs/react';
// import GuestLayout from '@/Layouts/GuestLayout';

// export default function ForgotPassword() {
//   const { data, setData, post, processing, errors, status } = useForm({
//     email: '',
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     post(route('password.email'));
//   };

//   return (
//     <GuestLayout>
//       <Head title="Wachtwoord vergeten" />
//       <h2 className="text-2xl font-bold mb-4">🔒 Wachtwoord vergeten</h2>
//       <p className="text-sm text-gray-600 mb-4">
//         Voer je e-mailadres in en je ontvangt een link om je wachtwoord opnieuw in te stellen.
//       </p>

//       {status && <p className="text-green-500">{status}</p>}

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="email"
//           value={data.email}
//           onChange={(e) => setData('email', e.target.value)}
//           placeholder="Email"
//           className="w-full border rounded px-3 py-2"
//           required
//         />
//         {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

//         <button
//           type="submit"
//           disabled={processing}
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//         >
//           {processing ? 'Verzenden...' : 'Reset link verzenden'}
//         </button>
//       </form>
//     </GuestLayout>
//   );
// }






import { useForm, Head } from '@inertiajs/react';

export default function ChangePassword({ userId }) {
  const { data, setData, post, processing, errors } = useForm({
    password: '',
    password_confirmation: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('password.change.submit', userId));
  };

  return (
    <>
      <Head title="Nieuw wachtwoord" />
      <div className="max-w-md mx-auto mt-10">
        <h1 className="text-xl font-bold mb-4">🔒 Nieuw wachtwoord</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={data.password}
            onChange={(e) => setData('password', e.target.value)}
            placeholder="Nieuw wachtwoord"
            className="w-full border rounded px-3 py-2"
          />
          <input
            type="password"
            value={data.password_confirmation}
            onChange={(e) => setData('password_confirmation', e.target.value)}
            placeholder="Bevestig wachtwoord"
            className="w-full border rounded px-3 py-2"
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
          <button className="bg-green-600 text-white px-4 py-2 rounded" disabled={processing}>
            Wachtwoord resetten
          </button>
        </form>
      </div>
    </>
  );
}
