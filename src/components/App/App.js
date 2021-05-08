import React from 'react'
import Container from 'react-bootstrap/Container'

import About from '../About/About'
import Header from '../Header/Header'
import Projects from '../Projects/Projects'
import './App.scss'

const App = () => (
	<div className='app'>
		<Container>
			<Header />
			<About />
			<Projects />
		</Container>
	</div>
)

export default App
