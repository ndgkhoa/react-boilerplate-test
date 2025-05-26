import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';

const PermissionPage = lazy(() => import('~/features/role-control/permission/pages/permission'));
// const RolesPage = lazy(() => import('./pages/roles'));
// const RolePage = lazy(() => import('./pages/role'));
const UsersPage = lazy(() => import('~/features/role-control/user/pages/users'));
// const UserPage = lazy(() => import('./pages/user'));

const RoleControlRoutes = () => {
  return (
    <Routes>
      <Route path="permission">
        <Route index element={<PermissionPage />} />
      </Route>
      <Route path="role">
        <Route index element={<div>role</div>} />
        {/* <Route path=":id" element={<RolePage />} /> */}
      </Route>
      <Route path="user">
        <Route index element={<UsersPage />} />
        {/* 
        change comp name
        <Route path=":id" element={<UserPage />} /> */}
      </Route>
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
};

export default RoleControlRoutes;
