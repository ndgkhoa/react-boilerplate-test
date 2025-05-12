// import { AuthenticatedTemplate, UnauthenticatedTemplate, useAccount } from '@azure/msal-react';
// import { type PropsWithChildren } from 'react';
// import { Navigate } from 'react-router-dom';

// import { useAuthStore } from '../hooks/useAuthStore';
// import { AuthProviders } from '../types/AuthProviders';

// export const ProtectedRoute = ({ children }: PropsWithChildren) => {
//   const account = useAccount();
//   const authState = useAuthStore((state) => state.auth);

//   const { isAuthenticated, provider } = authState || {};

//   // useEffect(() => {
//   //   if (!account) return;

//   //   axiosService.setAccessToken(account.idToken);

//   //   return () => {
//   //     axiosService.setAccessToken();
//   //   };
//   // }, [account]);

//   if (isAuthenticated && provider === AuthProviders.Local) return children;

//   return (
//     <>
//       <AuthenticatedTemplate>{account ? children : null}</AuthenticatedTemplate>

//       <UnauthenticatedTemplate>
//         <Navigate to="/auth/sign-in" replace />
//       </UnauthenticatedTemplate>
//     </>
//   );
// };
