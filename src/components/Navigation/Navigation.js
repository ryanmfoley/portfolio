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
						className='resume'
						title='resume'
						src='https://drive.google.com/file/d/1svNif7AvSGFUwC_eIp1Fsl9U4Mm5C5P1/preview'
						width='640'
						height='480'
						allow='autoplay'></iframe>
				</Modal.Body>
			</Modal>
		</>
	)
}

export default Navigation
