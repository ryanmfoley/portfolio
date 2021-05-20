import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

import './Navigation.css'

const Navigation = () => (
	<Navbar variant='dark' sticky='top'>
		<Navbar.Brand className='ml-5' href='#home'>
			<h2 className='mb-0'>Ryan Foley</h2>
		</Navbar.Brand>
		<Nav className='ml-auto mr-5'>
			<Nav.Link className='px-3' href='#about'>
				About
			</Nav.Link>
			<Nav.Link className='px-3' href='#projects'>
				Projects
			</Nav.Link>
			<Nav.Link className='px-3' href='#contact'>
				Contact
			</Nav.Link>
		</Nav>
	</Navbar>
)

export default Navigation
