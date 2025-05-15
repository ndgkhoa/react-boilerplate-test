import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';

//const ActivitiesPage = lazy(() => import('./pages/activities'));
// const RolesPage = lazy(() => import('./pages/roles'));
// const RolePage = lazy(() => import('./pages/role'));
// const UsersPage = lazy(() => import('./pages/users'));
// const UserPage = lazy(() => import('./pages/user'));

const RoleControlRoutes = () => {
  return (
    <Routes>
      <Route path="permission">
        <Route index element={<div>permission</div>} />
      </Route>
      <Route path="role">
        <Route index element={<div>role</div>} />
        {/* <Route path=":id" element={<RolePage />} /> */}
      </Route>
      <Route path="user">
        <Route index element={<div>user</div>} />
        {/* <Route path=":id" element={<UserPage />} /> */}
      </Route>
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
};

export default RoleControlRoutes;
