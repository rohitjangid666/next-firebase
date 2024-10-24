'use client';

import Link from 'next/link';

import { useFBAuth } from '@/hooks/useFBAuth';
import SignOut from '@/features/auth/components/SignOut';

export default function MyApp() {
  const { user, loading } = useFBAuth();

  if (loading) {
    return 'Loading...';
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='flex flex-col z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
        <h1 className='text-4xl'>NextJS Authentication App</h1>
        <div className='flex flex-col gap-4 justify-center items-center mt-8'>
          {user ? (
            <>
              <p className='text-xl'>Welcome, {user.email}!</p>
              <Link href='/profile' className='text-blue-500 underline text-lg'>
                <p>Visit the profile page</p>
              </Link>
              <SignOut />
            </>
          ) : (
            <>
              <p className='text-xl'>You are not signed in.</p>
              <Link href='/sign-in'>
                <button className='p-2 rounded-sm bg-blue-500 text-lg font-semibold text-white w-48'>
                  Sign in here
                </button>
              </Link>
              <Link href='/sign-up'>
                <button className='p-2 rounded-sm bg-blue-500 text-lg font-semibold text-white w-48'>
                  Sign up here
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
