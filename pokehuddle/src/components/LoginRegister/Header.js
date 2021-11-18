import React from 'react'

export default function Header() {
	return (
		<header className = "header">
			<div className = "banner">
				<img className ="bannerimg" src = {require('../../images/PokeHuddle-Title.png').default} alt = 'Pokehuddle' />
			</div>
		</header>
	)
}
