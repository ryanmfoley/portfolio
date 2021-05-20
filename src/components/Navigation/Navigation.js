import React, { useState } from 'react'
import { Carousel, Modal, Navbar, Nav } from 'react-bootstrap'

import resumePageOne from '../../assets/images/resume-page-1.png'
import resumePageTwo from '../../assets/images/resume-page-2.png'
import './Navigation.css'

const Navigation = () => {
	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	return (
		<>
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
					<Nav.Link className='px-3' onClick={handleShow}>
						Resume
					</Nav.Link>
				</Nav>
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

// const Navigation = () => (
// 	<Navbar variant='dark' sticky='top'>
// 		<Navbar.Brand className='ml-5' href='#home'>
// 			<h2 className='mb-0'>Ryan Foley</h2>
// 		</Navbar.Brand>
// 		<Nav className='ml-auto mr-5'>
// 			<Nav.Link className='px-3' href='#about'>
// 				About
// 			</Nav.Link>
// 			<Nav.Link className='px-3' href='#projects'>
// 				Projects
// 			</Nav.Link>
// 			<Nav.Link className='px-3' href='#contact'>
// 				Contact
// 			</Nav.Link>
// 			<Nav.Link
// 				className='px-3'
// 				href='https://docs.google.com/document/d/1INzbbDOxgz5enegBF7XMuZ3OOzMhkw80dJZgKK98uv8/edit?usp=sharing'>
// 				Resume
// 			</Nav.Link>
// 		</Nav>
// 	</Navbar>
// )

export default Navigation
