import React from 'react'
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './DashboardStyles/SideBar.css'
import Research from '../Pages/Research';
function SideBar() {


    const logout = () => {
        //also send a request to /api/logout once api is set up
        // window.localStorage.removeItem('token')
      }



    return (
            <div className = "nav-bar-container">
                <div className = "border-line">
                    <div className= "img-wrapper">
                        <img className ="avatar-img" src = {require('../../images/Avatars/mewtwoAvatar.png').default} alt = 'Avatar' />
                    </div>
                    <div className = "links-container">
                        <Link className = "link" to ='/test/dashlanding'>Home</Link>
                        <Link className = "link" to ='/test/research'>Research</Link>
                        <Link className = "link" to ='/test/favoritepokemon'>Favorite Pokemon</Link>
                        <Link className = "link" to ='/test/leaderboards'>Leaderboards</Link>
                        <Link className = "link" to ='/test/personalnotes'>Personal Notes</Link>
                        <Link className = "link" to ='/test/photos'>Photos</Link>
                        <Link className = "link" onClick={logout}>Logout</Link>
                    </div>
                </div>
            </div>
    )
}

export default SideBar;


                    // <Route path = '/research' >
                    //     <Research />
                    // </Route>