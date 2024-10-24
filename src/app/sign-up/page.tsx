import Link from 'next/link';

import { SignUp } from '@/features/auth';

const SignUpScreen = () => {
  return (
    <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white'>
          Sign up
        </h2>
      </div>

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <SignUp />

        <p className='mt-10 text-center text-sm text-gray-500'>
          Already a member?
          <Link
            href='/sign-in'
            className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpScreen;
