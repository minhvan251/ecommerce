import React from 'react';
import {HomePage} from './pages/homepage/homepage.component'
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignOutPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckOut from './pages/checkout/checkout.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.action'

class App extends React.Component  {

  
  
  unsubscribFromAuth = null

  componentDidMount(){
    const {setCurrentUser} = this.props
    this.unsubscribFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            
              id:snapShot.id,
              ...snapShot.data()
            
          })

          
      })

      } else {
        setCurrentUser(userAuth)
      }


      

      
      
    })
    
  }

  componentWillUnmount(){
    // console.log('unmount')
    this.unsubscribFromAuth();

  }
  render() {
    return (
      <div>
        <Header />
        {/* <HomePage /> */}
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() =>
          this.props.currentUser ? 
          (<Redirect to='/'/>): 
          (<SignInAndSignOutPage />)} />
          <Route exact path='/checkout' component={CheckOut} />
          
        </Switch>
      </div>
    );

  }
  
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
