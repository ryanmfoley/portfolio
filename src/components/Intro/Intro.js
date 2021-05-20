import React from 'react'
import { Button } from 'react-bootstrap'

import './Intro.css'

const Intro = () => (
	<main id='home' className='intro'>
		<h1 className='m-0'>
			Hello, I'm{' '}
			<span className='name'>
				<strong>Ryan Foley</strong>
			</span>
			.
		</h1>
		<h1 className='mb-2'>I'm a Software Engineer.</h1>
		<Button
			className='btn-intro'
			variant='outline-primary'
			size='lg'
			onClick={() => (window.location.href = '#about')}>
			View my work <i className='arrow d-inline-block p-1'></i>
		</Button>
	</main>
)

export default Intro
