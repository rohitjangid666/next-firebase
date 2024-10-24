'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { signInWithEmailAndPassword } from 'firebase/auth';

import { firebaseAuth } from '@/lib/firebase';

const SignIn = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [signInError, setSignInError] = useState<string>('');
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      router.push('/');
    } catch (error) {
      console.error('Error logging in:', error);

      if (error instanceof Error) {
        setSignInError(error.message);
      } else {
        setSignInError('Sign up failed');
      }
    }
  };

  return (
    <form className='space-y-6' onSubmit={handleSignIn}>
      <div>
        <label
          htmlFor='email'
          className='block text-sm font-medium leading-6 text-gray-900 dark:text-white'
        >
          Email address
        </label>
        <div className='mt-2'>
          <input
            id='email'
            name='email'
            type='email'
            autoComplete='email'
            required
            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div>
        <div className='flex items-center justify-between'>
          <label
            htmlFor='password'
            className='block text-sm font-medium leading-6 text-gray-900 dark:text-white'
          >
            Password
          </label>
          <div className='text-sm'>
            <a
              href='#'
              className='font-semibold text-indigo-600 hover:text-indigo-500'
            >
              Forgot password?
            </a>
          </div>
        </div>
        <div className='mt-2'>
          <input
            id='password'
            name='password'
            type='password'
            autoComplete='current-password'
            required
            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div>
        <button
          type='submit'
          className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          Sign in
        </button>
      </div>

      {signInError && <p className='text-red-500 text-sm'>{signInError}</p>}
    </form>
  );
};

export { SignIn };
