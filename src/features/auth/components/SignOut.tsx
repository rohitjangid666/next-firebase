import { signOut } from 'firebase/auth';

import { useFBAuth } from '@/hooks/useFBAuth';
import { firebaseAuth } from '@/lib/firebase';

const SignOut = () => {
  const { user } = useFBAuth();

  const handleSignOut = async () => {
    try {
      await signOut(firebaseAuth);
      console.log('User signed out');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (!user) {
    return null; // Don't display the sign out button if the user is not logged in
  }

  return (
    <button
      onClick={handleSignOut}
      className='p-2 rounded-sm bg-red-500 font-semibold text-white'
    >
      Sign Out
    </button>
  );
};

export default SignOut;
