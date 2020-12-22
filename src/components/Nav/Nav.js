import React from 'react'
import { Navbar } from 'react-bootstrap'

const Nav = () => {
	return (
		<div>
			<Navbar bg='dark' variant='dark'>
				<Navbar.Brand href='#home'>Navbar</Navbar.Brand>
				<Nav className='mr-auto'>
					<Nav.Link href='#home'>Home</Nav.Link>
					<Nav.Link href='#features'>About</Nav.Link>
					<Nav.Link href='#pricing'>Projects</Nav.Link>
				</Nav>
			</Navbar>
		</div>
	)
}

export default Nav
