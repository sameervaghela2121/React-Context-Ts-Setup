import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { useAppState } from './context';

// Pages
const About = lazy(() => import('./views/About'));
const Dashboard = lazy(() => import('./views/Home'));
const Login = lazy(() => import('./views/Login'));
const SecuredPage = lazy(() => import('./views/SecuredPage'));
const UnAuthorizedAccess = lazy(() => import('./views/UnAuthorizedAccess'));

const Routing = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/secured-page',
      element: <PrivateRoute>
        <SecuredPage />
      </PrivateRoute>
    },
    {
      path: 'unauthorized',
      element: <UnAuthorizedAccess />,
    },
    {
      path: 'about',
      element: <About />,
    }
  ]);

  return routes;
}

export const PrivateRoute = ({ children, }: { children: any }) => {
  const { isLoggedIn } = useAppState("auth");

  return isLoggedIn ? children : <Navigate to="/unauthorized" />;
}


export default Routing;