// import ApplicationLogo from '@/Components/ApplicationLogo';
// import { Link } from '@inertiajs/react';

// export default function GuestLayout({ children }) {
//     return (
//         <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
//             <div>
//                 <Link href="/">
//                     <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
//                 </Link>
//             </div>

//             <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
//                 {children}
//             </div>
//         </div>
//     );
// }



// resources/js/Layouts/GuestLayout.jsx

import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <Link href="/">
            <h1 className="text-3xl font-bold text-blue-600">🔥 Binsta</h1>
          </Link>
          <p className="text-sm text-gray-500">Code, share & connect.</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">{children}</div>
      </div>
    </div>
  );
}
