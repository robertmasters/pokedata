import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import axios from 'axios'

import Login from './components/Login';
import Dashboard from './components/Dashboard';
function App() {

  const logout = () => {

  }


  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to ='/login'>Login</Link>
          </li>
          <li>
            <Link onClick={logout}>Logout</Link>
          </li>
          <li>
            <Link to ='/dashboard'>dashboard</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path =  '/dashboard' component = {Dashboard}></Route>
          <Route path = '/login' component ={Login} />
          <Route component = {Login} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;