import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useHistory} from 'react-router-dom';
import SideBar from './SideBar'
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import DashLanding from '../Pages/DashLanding'
import FavoritePokemon from '../Pages/FavoritePokemon'
import Leaderboards from '../Pages/Leaderboards'
import PersonalNotes from '../Pages/PersonalNotes'
import Photos from '../Pages/Photos'
import Research from '../Pages/Research';
import './DashboardStyles/Dashboard.css'
import axios from 'axios';

const initialState = {
  pokemon: {
  pokename: ''
}
}
function Dashboard() {

  const [searchName, setSearchName] = useState(initialState)
  const history = useHistory()

 function handleChange(e) {
  setSearchName({
    pokemon: {
          ...searchName.pokemon,
          [e.target.name]: e.target.value
      }
  })
 }

  const logout = () => {
    //also send a request to /api/logout once api is set up
    // window.localStorage.removeItem('token')
  }

    function getData(){
      console.log("state", searchName.pokemon.pokename)
      console.log('click')
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${searchName.pokemon.pokename}`)
        .then(
          (res) => console.log('res: ',res)
          
          )
        .catch((err) => console.log(err.response.data.error))
        history.push('/test/research') //sends me to the dashboard page 
        
    }


  return (
    <div className= "dash-container">

        {/* <div onClick = {getData}>click me</div> */}
        <div classNam= "banner-container">

            <img className ="bannerimg" src = {require('../../images/PokeHuddle-Title.png').default} alt = 'Name Banner' />
          
            {/*
            <input className = 'search'
            type = 'text'
            name = 'pokename'
            placeholder = "Pokemon name"
            value = {searchName.pokemon.pokename}
            onChange ={handleChange}
            
            />
            <button onClick = {getData} className = "search-btn">Search</button>
            */}

          </div> 


        <div className= "center-content">
          <div className= "sidebar">
            <SideBar />
          </div>
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
  );
}

export default Dashboard;
