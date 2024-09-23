import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout';
import HomePage from './pages/HomePage';
import { ROUTE } from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: ROUTE.HOME,
        element: <HomePage />,
      },
    ],
  },
]);
export function App() {
  return <RouterProvider router={router} />;
}

export default App;
