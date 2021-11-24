import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import Login from './components/LoginRegister/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Register from './components/LoginRegister/Register';
import PageNotFound from './components/Pages/PageNotFound';
import Header from './components/LoginRegister/Header';
function App() {

  return (
    <Router>
      <div className="main-container">
          <div className="Route-container">
          <Header/>
              <Switch>
                <PrivateRoute exact path = '/dashboard' component = {Dashboard}></PrivateRoute> 
                <Route exact path = '/' component = {Login} />
                <Route exact path = '/test' component = {Dashboard} />
                <Route exact path = '/register' component = {Register} /> 
                <Route component = {PageNotFound} /> 
              </Switch>
            <a target="_blank" className = "link" rel="noreferrer" href="https://github.com/robertmasters/pokehuddle/blob/main/Application_build_plan.md">Github  </a>with roadmap for app
          </div>
        </div>
    </Router>
  );
}

export default App; 

<Route component = {Login} />