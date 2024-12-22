import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  DashboardLayout,
  Landing,
  Login,
  Register,
  HomeLayout,
  Error,
} from './pages';

// router
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <h1>AddJob</h1>,
          },
          {
            path: 'stats',
            element: <h1>Stats</h1>,
          },
          {
            path: 'all-jobs',
            element: <h1>AllJobs</h1>,
          },
          {
            path: 'profile',
            element: <h1>Profile</h1>,
          },
          {
            path: 'admin',
            element: <h1>Admin</h1>,
          },
        ],
      },
    ],
  },
]);

// App
function App() {
  return <RouterProvider router={router} />;
}

export default App;
