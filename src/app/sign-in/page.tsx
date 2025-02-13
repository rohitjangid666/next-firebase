import Link from 'next/link';

import { SignIn } from '@/features/auth';

const SignInScreen = () => {
  return (
    <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white'>
          Sign in to your account
        </h2>
      </div>

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <SignIn />

        <p className='mt-10 text-center text-sm text-gray-500'>
          Not a member?
          <Link
            href='/sign-up'
            className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInScreen;
