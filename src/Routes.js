'use strict';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import uiStore from './store/uiStore';

import Home from './containers/pages/Home';
import Shop from './containers/pages/Shop';
import Cart from './containers/pages/Cart';
import Checkout from './containers/pages/Checkout';
import Payment from './containers/pages/Payment';
import Login	 from './containers/pages/Login';
import User from './containers/pages/User';
import NotFoundPage from './containers/pages/NotFoundPage';

export function renderRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/cart" component={Cart}/>
      <Route exact path="/shop" component={Shop}/>
      <PrivateRoute exact path="/payment" component={Payment}/>
      <PrivateRoute exact path="/checkout" component={Checkout}/>
      <PrivateRoute exact path="/user" component={User}/>
      <PublicRoute exact path="/login" component={Login}/>
      <Route path="/*" component={NotFoundPage}/>						
    </Switch>
  )
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    uiStore.loggedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    !uiStore.loggedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)