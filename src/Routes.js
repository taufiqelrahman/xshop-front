'use strict';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import uiStore from './store/uiStore';

import Home from './containers/pages/Home';
import Shop from './containers/pages/Shop';
import Cart from './containers/pages/Cart';
import Checkout from './containers/pages/Checkout';
import Login	 from './containers/pages/Login';
import NotFoundPage from './containers/pages/NotFoundPage';

export function renderRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/cart" component={Cart}/>
      <Route exact path="/shop" component={Shop}/>
      <PrivateRoute exact path="/checkout" component={Checkout}/>
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