'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { createUserWithEmailAndPassword } from 'firebase/auth';

import { firebaseAuth } from '@/lib/firebase';

const SignUp = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [signUpError, setSignUpError] = useState<string>('');
  const router = useRouter();

  const handleSignUp = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
      router.push('/');
    } catch (error: unknown) {
      console.error('Error signing up:', error);
      if (error instanceof Error) {
        setSignUpError(error.message);
      } else {
        setSignUpError('Sign up failed');
      }
    }
  };

  return (
    <form className='space-y-6' onSubmit={handleSignUp}>
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
          Sign up
        </button>
      </div>

      {signUpError && <p className='text-red-500 text-sm'>{signUpError}</p>}
    </form>
  );
};

export { SignUp };
