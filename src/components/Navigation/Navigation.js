import { useState } from 'react'
import { Modal, Nav, Navbar } from 'react-bootstrap'

import './Navigation.css'

const Navigation = () => {
	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	return (
		<>
			<Navbar collapseOnSelect expand='sm' variant='dark' sticky='top'>
				<Navbar.Brand href='#home'>
					<h2 className='mb-0'>Ryan Foley</h2>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav' className='text-center'>
					<Nav className='ml-auto'>
						<Nav.Link href='#about'>About</Nav.Link>
						<Nav.Link href='#projects'>Projects</Nav.Link>
						<Nav.Link href='#contact'>Contact</Nav.Link>
						<Nav.Link onClick={handleShow}>Resume</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<Modal size='lg' show={show} onHide={handleClose}>
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>
					<iframe
						src='https://drive.google.com/file/d/10DvNCSSl3pHnJuNAe9CNX8CaoS2zJjV6/preview'
						className='resume'
						title='resume'
						allow='autoplay'></iframe>
				</Modal.Body>
			</Modal>
		</>
	)
}

export default Navigation
