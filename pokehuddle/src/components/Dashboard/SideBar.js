import React from 'react'
import { Link } from 'react-router-dom';
import './DashboardStyles/SideBar.css'
function SideBar() {


    const logout = () => {
        //also send a request to /api/logout once api is set up
        // window.localStorage.removeItem('token')
      }



    return (
            <div>
                <div className = "nav-bar">
                    <Link to ='/login'>Research</Link>
                    <Link to ='/favoritepokemon'>Favorite Pokemon</Link>
                    <Link to ='/leaderboards'>Leaderboards</Link>
                    <Link to ='/personalnotes'>Personal Notes</Link>
                    <Link to ='/photos'>Photos</Link>
                    <Link onClick={logout}>Logout</Link>
                </div>

            </div>
    )
}

export default SideBar;
