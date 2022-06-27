
import { lazy } from 'react';
import GlobalLayout from './pages/_layout'

const DynamicIndex = lazy(() => import('./pages/index'));
const DynamicProductsIndex = lazy(() => import('./pages/products/index'));
const DynamicProductsId = lazy(() => import('./pages/products/[id]'));


export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <DynamicIndex />, index: true },
      { path: '/products', element: <DynamicProductsIndex />, index: true },
      { path: '/products/:id', element: <DynamicProductsId />, },
    ]
  }
]

export const pages = [
  { route: '/' },
  { route: '/products' },
  { route: '/products/:id' },
]
