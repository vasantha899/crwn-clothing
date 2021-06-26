import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css';
import { Switch,Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { setCurrentUser } from './redux/user/user.actions';

function App() {
  return (<div>
    <Header/>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/signin' component={SignInAndSignUpPage}/>
    </Switch>
     </div>
  );
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

