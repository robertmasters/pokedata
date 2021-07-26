import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { axiosWithAuth } from '../utils/axiosWithAuth';

function dashboard() {

  const logout = () => {
    //also send a request to /api/logout once api is set up
    // window.localStorage.removeItem('token')
  }

    function getData(){
        // axiosWithAuth()
        // .get('/api/data')
        // .then((res) => console.log('res: ',res))
        // .catch((err) => console.log(err.response.data.error))
    }


  return (
    <Router>
        <Link onClick={logout}>Logout</Link>
        <div onClick = {getData}>click me</div>
    </Router>
  );
}

export default dashboard;
