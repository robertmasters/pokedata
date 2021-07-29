import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SideBar from './SideBar'
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import DashLanding from '../Pages/DashLanding'
import FavoritePokemon from '../Pages/FavoritePokemon'
import Leaderboards from '../Pages/Leaderboards'
import PersonalNotes from '../Pages/PersonalNotes'
import Photos from '../Pages/Photos'
import Research from '../Pages/Research';
import './DashboardStyles/Dashboard.css'


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
    <div className= "dash-container">



        {/* <div onClick = {getData}>click me</div> */}
        <div classNam= "banner-container">
          <img className ="bannerimg" src = {require('../../images/PokeHuddle-Title.png').default} alt = 'Name Banner' />
        </div>
        <div className= "center-content">
          <div className= "sidebar">
            <SideBar />
                <Switch>
                {/* <PrivateRoute exact path = '/dashboard' component = {Dashboard}></PrivateRoute> */}
                <Route path = '/test/dashlanding' component = {DashLanding} />
                <Route path = '/test/research' component = {Research} />
                <Route path = '/test/favoritepokemon' component = {FavoritePokemon} />
                <Route path = '/test/leaderboards' component = {Leaderboards} />
                <Route path = '/test/personalnotes' component = {PersonalNotes} />
                <Route path = '/test/photos' component = {Photos} />
                <Route component = {DashLanding} />
                </Switch>
          </div>
        </div>
    </div>
  );
}

export default dashboard;
