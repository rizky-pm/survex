import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import useFirebaseAuth from '../hooks/useFirebaseAuth';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user, isLoading } = useFirebaseAuth();

  if (isLoading) {
    return (
      <>
        <h1>Loading ...</h1>
      </>
    );
  }

  if (!user) {
    return <Navigate to={'/signin'} />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
