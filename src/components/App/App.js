import React from 'react'
import Container from 'react-bootstrap/Container'

import About from '../About/About'
import Projects from '../Projects/Projects'
import './App.scss'

function App() {
	return (
		<div className='app'>
			<Container>
				<About />
				<Projects />
			</Container>
		</div>
	)
}

export default App
