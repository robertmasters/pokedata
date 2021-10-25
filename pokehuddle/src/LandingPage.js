import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import axios from 'axios'

import PrivateRoute from './components/PrivateRoute';
import Login from './components/LoginRegister/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Register from './components/LoginRegister/Register';
function LandingPage() {

  return (
    <Router>
      <div className="main-container">
            {/*          
              <Link onClick={logout}>Logout</Link>
              <Link to ='/dashboard'>dashboard</Link>
           */}
          <div className="Route-container">
              <Switch>
                {/* <PrivateRoute exact path = '/dashboard' component = {Dashboard}></PrivateRoute> */}
                <Route exact path = '/' component = {Login} />
                <Route path = '/test' component = {Dashboard} />
                <Route path = '/login' component ={Login} />
                <Route path = '/register' component ={Register} />  
              </Switch>
            <a target="_blank" className = "link" rel="noreferrer" href="https://github.com/robertmasters/pokehuddle/blob/main/Application_build_plan.md">Github  </a>with roadmap for app
          </div>
        </div>
    </Router>
  );
}

export default LandingPage;

<Route component = {Login} />