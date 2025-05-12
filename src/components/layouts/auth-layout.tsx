import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { FullscreenFallback } from '../fallbacks';

export const AuthLayout = () => {
  return (
    <>
      {/* if (isAuthenticated) {
    return <Navigate to="/" replace />;
  } */}

      <Suspense fallback={<FullscreenFallback />}>
        <Outlet />
      </Suspense>
    </>
  );
};
