import { createBrowserRouter } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import HomePage from '../pages/Home';
import SignInPage from '../pages/SignIn';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/signin',
    element: <SignInPage />,
  },
]);

export default router;
