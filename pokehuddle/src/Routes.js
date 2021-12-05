import React from 'react';
import {Route, Switch, useLocation} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import Login from './components/LoginRegister/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Register from './components/LoginRegister/Register';
import PageNotFound from './components/Pages/PageNotFound';

function Routes() {

  return (
    //<PrivateRoute exact path = '/dashboard' component = {Dashboard}></PrivateRoute> 
      <Switch>
        <Route exact path = '/' component = {Login} />
        <Route path = '/dashboard' component = {Dashboard} />
        <Route path = '/register' component = {Register} /> 
        <Route component = {PageNotFound} /> 
      </Switch>
  )
};

export default Routes; 
