import { firebaseAuth } from '@/lib/firebase';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { useEffect, useState } from 'react';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, user => {
      if (user) {
        console.log('There is a user');
        setUser(user);
      } else {
        console.log('There is no user');
      }
    });

    return () => unsubscribe();
  }, [user]);

  return user;
}
