import React from 'react';
import {HomePage} from './pages/homepage/homepage.component'
import './App.css';
import { Route } from 'react-router-dom';
import ShopPage from './shop/shop.component'



function App() {
  return (
    <div>
      {/* <HomePage /> */}
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;
