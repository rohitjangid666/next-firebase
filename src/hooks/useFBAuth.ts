import { useContext } from 'react';

import { AuthContext } from '@/context/AuthContext';

import type { AuthContextType } from '@/types/auth';

export const useFBAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
