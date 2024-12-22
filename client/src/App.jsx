import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DashboardLayout, Landing, Login, Register, HomeLayout, Error } from './pages';

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
      },
    ],
  },
]);

// App
function App() {
  return <RouterProvider router={router} />;
}

export default App;
