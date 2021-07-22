import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { axiosWithAuth } from '../utils/axiosWithAuth';

function dashboard() {

    function getData(){
        axiosWithAuth()
        .get('/api/data')
        .then((res) => console.log('res: ',res))
        .catch((err) => console.log(err.response.data.error))
    }


  return (
    <Router>
        <div onClick = {getData}>click me</div>
    </Router>
  );
}

export default dashboard;
