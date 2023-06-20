import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import ProductList from './features/product-list/ProductList.js';
import LoginPage from './pages/LoginPage.js';
import SignupPage from './pages/SignupPage.js';

function App() {
  return (
    <div className='App'>
      <SignupPage />
    </div>
  );
}

export default App;
