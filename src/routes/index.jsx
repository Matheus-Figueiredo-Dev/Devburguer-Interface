import { createBrowserRouter } from 'react-router-dom';

import { Home } from '../containers/Home';
import { Login } from '../containers/Login';
import { Register } from '../containers/Register';
import { Menu } from '../containers/Menu';
import { Header } from '../components/Header';

export const router = createBrowserRouter([
  {
    path: '/home',
    element: (
      <>
        <Header />
        <Home />,
      </>
    ),
  },
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Register />,
  },
  {
    path: '/cardapio',
    element: (
      <>
        <Header />
        <Menu />,
      </>
    ),
  },
]);
