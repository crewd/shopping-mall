
import { lazy } from 'react';
import GlobalLayout from './pages/_layout'

import Index from './pages/index';
import ProductsIndex from './pages/products/index';
import ProductsId from './pages/products/[id]';
import Cart from './pages/cart/index';
import PaymentPage from './pages/payment';


export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <Index />, index: true },
      { path: '/products', element: <ProductsIndex />, index: true },
      { path: '/products/:id', element: <ProductsId />, },
      { path: '/cart', element: <Cart />, },
      { path: '/payment', element: <PaymentPage />, },
    ]
  }
]

export const pages = [
  { route: '/' },
  { route: '/products' },
  { route: '/products/:id' },
  { route: '/cart' },
  { route: '/payment' },
]
