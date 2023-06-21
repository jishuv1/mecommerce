import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import ProductList from './features/product-list/ProductList.js';
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
import Cart from './features/cart/Cart.js';
import CartPage from './pages/CartPage.js';

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
]);

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
