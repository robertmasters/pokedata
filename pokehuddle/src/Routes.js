import React from 'react';
import {BrowserRouter as Router, Route, Switch, useLocation} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import Login from './components/LoginRegister/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Register from './components/LoginRegister/Register';
import PageNotFound from './components/Pages/PageNotFound';

function Routes() {
//   const location = useLocation();
//   console.log("location: ",location)
  return (
    <Router>
              <Switch>
                <PrivateRoute exact path = '/dashboard' component = {Dashboard}></PrivateRoute> 
                <Route exact path = '/' component = {Login} />
                <Route exact path = '/test' component = {Dashboard} />
                <Route exact path = '/register' component = {Register} /> 
                <Route component = {PageNotFound} /> 
              </Switch>
    </Router>
  );
}

export default Routes; 
