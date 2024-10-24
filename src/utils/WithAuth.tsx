import { useEffect } from 'react';

import { useRouter } from 'next/navigation';
import { useFBAuth } from '@/hooks/useFBAuth';

const withAuth = (WrappedComponent: React.FC) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ComponentWithAuth = (props: any) => {
    const { user } = useFBAuth();
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        router.replace('/');
      }
    }, [user, router]);

    if (!user) {
      return null; // or a loading spinner
    }

    return <WrappedComponent {...props} />;
  };

  ComponentWithAuth.displayName = `withAuth(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return ComponentWithAuth;
};

export default withAuth;
