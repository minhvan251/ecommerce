import React from 'react';
import {HomePage} from './pages/homepage/homepage.component'
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignOutPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth } from './firebase/firebase.utils'

class App extends React.Component  {

  constructor(props){
    super(props);
    
    this.state ={
      currentUser: null
    }

  }
  
  unsubscribFromAuth = null

  componentDidMount(){
    this.unsubscribFromAuth = auth.onAuthStateChanged(user => {this.setState({
      currentUser: user
    });
      console.log(user);
    })
  }

  componentWillUnmount(){

    this.unsubscribFromAuth();

  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        {/* <HomePage /> */}
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignOutPage} />
          
        </Switch>
      </div>
    );

  }
  
}

export default App;
