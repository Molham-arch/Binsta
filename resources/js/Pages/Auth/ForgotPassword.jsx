// import InputError from '@/Components/InputError';
// import PrimaryButton from '@/Components/PrimaryButton';
// import TextInput from '@/Components/TextInput';
// import GuestLayout from '@/Layouts/GuestLayout';
// import { Head, useForm } from '@inertiajs/react';

// export default function ForgotPassword({ status }) {
//     const { data, setData, post, processing, errors } = useForm({
//         email: '',
//     });

//     const submit = (e) => {
//         e.preventDefault();

//         post(route('password.email'));
//     };

//     return (
//         <GuestLayout>
//             <Head title="Forgot Password" />

//             <div className="mb-4 text-sm text-gray-600">
//                 Forgot your password? No problem. Just let us know your email
//                 address and we will email you a password reset link that will
//                 allow you to choose a new one.
//             </div>

//             {status && (
//                 <div className="mb-4 text-sm font-medium text-green-600">
//                     {status}
//                 </div>
//             )}

//             <form onSubmit={submit}>
//                 <TextInput
//                     id="email"
//                     type="email"
//                     name="email"
//                     value={data.email}
//                     className="mt-1 block w-full"
//                     isFocused={true}
//                     onChange={(e) => setData('email', e.target.value)}
//                 />

//                 <InputError message={errors.email} className="mt-2" />

//                 <div className="mt-4 flex items-center justify-end">
//                     <PrimaryButton className="ms-4" disabled={processing}>
//                         Email Password Reset Link
//                     </PrimaryButton>
//                 </div>
//             </form>
//         </GuestLayout>
//     );
// }



import { useForm, Head } from '@inertiajs/react';

export default function ForgotPassword() {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('password.verifyEmail'));
  };

  return (
    <>
      <Head title="Reset wachtwoord" />
      <div className="max-w-md mx-auto mt-10">
        <h1 className="text-xl font-bold mb-4">🔑 Reset wachtwoord</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={data.email}
            onChange={(e) => setData('email', e.target.value)}
            placeholder="Vul je email in"
            className="w-full border rounded px-3 py-2"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
          <button className="bg-blue-600 text-white px-4 py-2 rounded" disabled={processing}>
            Doorgaan
          </button>
        </form>
      </div>
    </>
  );
}
