import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage.js';
import SignupPage from './pages/SignupPage.js';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import Home from './pages/Home.js';
import CartPage from './pages/CartPage.js';
import Checkout from './pages/Checkout.js';
import ProductDetail from './features/product-list/components/ProductDetail.js';
import ProductDetailPage from './pages/ProductDetailPage.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
  {
    path: '/product-detail',
    element: <ProductDetailPage />,
  },
]);

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
