import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Homepage from './pages/Homepage';
import Mangas from './pages/Mangas';
import Mode from './pages/Mode';
import Rap from './pages/Rap';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/rap',
        element: <Rap />,
      },
      {
        path: '/mangas',
        element: <Mangas />,
      },
      {
        path: '/mode',
        element: <Mode />,
      },
    ],
  },
]);