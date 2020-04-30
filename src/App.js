import React from 'react';
import {HomePage} from './pages/homepage/homepage.component'
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignOutPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'


function App() {
  return (
    <div>
      <Header />
      {/* <HomePage /> */}
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignOutPage} />

      </Switch>
    </div>
  );
}

export default App;
