import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default function DashboardRoutes() {
	return (
		<Router>
			<Switch>
				<Route path = '/test/home' component = {Home} />
				<Route path = '/test/research' component = {Research} />
				<Route path = '/test/favoritepokemon' component = {FavoritePokemon} />
				<Route path = '/test/leaderboards' component = {Leaderboards} />
				<Route path = '/test/personalnotes' component = {PersonalNotes} />
				<Route path = '/test/photos' component = {Photos} />
				<Route component = {Home} />
			</Switch>
		</Router>
	);
};
