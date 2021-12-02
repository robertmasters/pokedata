import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SideBar from './SideBar'
import Home from '../Pages/Home'
import FavoritePokemon from '../Pages/FavoritePokemon'
import Leaderboards from '../Pages/Leaderboards'
import PersonalNotes from '../Pages/PersonalNotes'
import Photos from '../Pages/Photos'
import Research from '../Pages/Research';
import './DashboardStyles/Dashboard.css'
import DashboardRoutes from './DashboardRoutes';

function Dashboard() {

    return (
        <div className= "dash-container">
            <div className= "center-content">
                <div className= "sidebar">
                    <SideBar />
                </div>
                <DashboardRoutes />
            </div>
        </div>
    );
}

export default Dashboard;
