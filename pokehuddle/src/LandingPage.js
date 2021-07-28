import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import axios from 'axios'

import PrivateRoute from './components/PrivateRoute';
import Login from './components/LoginRegister/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Register from './components/LoginRegister/Register';
import '../src/LandingPage.css'
function LandingPage() {

  return (
    <Router>
      <div className="main-container">
            {/*          
              <Link onClick={logout}>Logout</Link>
              <Link to ='/dashboard'>dashboard</Link>
           */}
          <div className= "Route-container">
              <Switch>
                {/* <PrivateRoute exact path = '/dashboard' component = {Dashboard}></PrivateRoute> */}
                <Route path = '/test' component = {Dashboard} />
                <Route path = '/login' component ={Login} />
                <Route path = '/register' component ={Register} />
                <Route component = {Login} />
              </Switch>
            </div>
        </div>
    </Router>
  );
}

export default LandingPage;