import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SideBar from './SideBar'
import DashLanding from '../Pages/DashLanding'
import FavoritePokemon from '../Pages/FavoritePokemon'
import Leaderboards from '../Pages/Leaderboards'
import PersonalNotes from '../Pages/PersonalNotes'
import Photos from '../Pages/Photos'
import Research from '../Pages/Research';
import './DashboardStyles/Dashboard.css'

function Dashboard() {

    return (
        <div className= "dash-container">
            <div classNam= "banner-container">
                <img className ="bannerimg" src = {require('../../images/PokeHuddle-Title.png').default} alt = 'Name Banner' />
            </div> 

            <div className= "center-content">
                <div className= "sidebar">
                    <SideBar />
                </div>
            <Switch>
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
    );
}

export default Dashboard;
