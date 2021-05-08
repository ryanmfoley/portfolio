import React from 'react'
import Button from 'react-bootstrap/Button'

import './Header.css'

const Header = () => (
	<header className='intro'>
		<h1>
			Hello, I'm{' '}
			<span>
				<strong>Ryan Foley</strong>
			</span>
			.
		</h1>
		<h1 className='mb-2'>I'm a Software Engineer.</h1>
		<Button
			variant='outline-primary'
			size='lg'
			onClick={() => (window.location.href = '#about')}>
			View my work <i className='arrow'></i>
		</Button>
	</header>
)

export default Header
