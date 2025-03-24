import { createBrowserRouter } from 'react-router-dom';

import {
  Cart,
  Checkout,
  CompletePayment,
  Home,
  Login,
  Menu,
  Register,
} from '../containers';
import { Footer, Header } from '../components';

export const router = createBrowserRouter([
  {
    path: '/home',
    element: (
      <>
        <Header />
        <Home />,
        <Footer />
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
  {
    path: '/carrinho',
    element: <Cart />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
  {
    path: '/complete',
    element: <CompletePayment />,
  },
]);
