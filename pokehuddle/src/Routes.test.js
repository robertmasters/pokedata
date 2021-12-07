import React from 'react'
import {render, screen} from '@testing-library/react'
import Routes from './Routes'
import { MemoryRouter } from 'react-router'
import App from './App'



it("renders without crashing", () => {
	render(
		<MemoryRouter>
			<Routes />
		</MemoryRouter>
	)
})