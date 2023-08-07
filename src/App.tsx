import { FC } from 'react';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import './index.scss';
import AccessoriesPage from './pages/AccessoriesPage';
import CartPage from './pages/CartPage';
import FavouritesPage from './pages/FavouritesPage';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import PhonesPage from './pages/PhonesPage';
import ProductPage from './pages/ProductPage';
import TabletsPage from './pages/TabletsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'home',
        element: <Navigate to="/" replace />,
      },
      {
        path: 'phones',
        element: <PhonesPage />,
        children: [
          {
            path: ':phoneId',
            element: <ProductPage />,
          },
        ],
      },
      {
        path: 'tablets',
        element: <TabletsPage />,
        children: [
          {
            path: ':tabletId',
            element: <ProductPage />,
          },
        ],
      },
      {
        path: 'accessories',
        element: <AccessoriesPage />,
        children: [
          {
            path: ':accessoryId',
            element: <ProductPage />,
          },
        ],
      },
      {
        path: 'favourites',
        element: <FavouritesPage />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export const App: FC = () => <RouterProvider router={router} />;
