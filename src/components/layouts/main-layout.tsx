// import { memo, Suspense, useEffect } from 'react';
// import { Layout } from 'antd';
// import { Outlet } from 'react-router-dom';

// import { FullPageFallback } from '~/components/fallbacks';
// import { Sidebar, Navbar } from '~/components/ui';
// import { useMsal } from '@azure/msal-react';
// import { loginRequest } from '~/config/msal';
// import { useAuthStore } from '~/features/auth/hooks/useAuthStore';
// import { axiosService } from '~/config/axios';
// import { AuthProviders } from '~/features/auth/types/AuthProviders';

// const LayoutContent = memo(() => {
//   return (
//     <Layout.Content className="h-[calc(100vh-64px)] bg-white">
//       <Suspense fallback={<FullPageFallback />}>
//         <Outlet />
//       </Suspense>
//     </Layout.Content>
//   );
// });

// export const MainLayout = () => {
//   const authState = useAuthStore((state) => state.auth);
//   const { accounts, instance } = useMsal();

//   useEffect(() => {
//     if (authState?.provider === AuthProviders.Local) {
//       axiosService.setAccessToken(authState.AccessToken);
//     } else {
//       instance.acquireTokenSilent({ account: accounts[0], ...loginRequest }).then((response) => {
//         axiosService.setAccessToken(response.accessToken);
//       });
//     }
//   }, [instance, accounts, authState]);

//   return (
//     <Layout className="h-screen w-screen overflow-hidden ">
//       <Sidebar />
//       <Layout>
//         <Navbar />
//         <LayoutContent />
//       </Layout>
//     </Layout>
//   );
// };
