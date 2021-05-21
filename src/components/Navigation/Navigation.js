import React, { useState } from 'react'
import { Carousel, Modal, Nav, Navbar } from 'react-bootstrap'

import resumePageOne from '../../assets/resume-page-1.png'
import resumePageTwo from '../../assets/resume-page-2.png'
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
				<Navbar.Collapse id='responsive-navbar-nav'>
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
					<Carousel>
						<Carousel.Item>
							<img
								className='d-block w-100'
								src={resumePageOne}
								alt='resume page 1'
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className='resume d-block w-100'
								src={resumePageTwo}
								alt='resume page 2'
							/>
						</Carousel.Item>
					</Carousel>
				</Modal.Body>
			</Modal>
		</>
	)
}

export default Navigation
