import React from 'react'

import About from '../About/About'
import Intro from '../Intro/Intro'
import Navigation from '../Navigation/Navigation'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'

import './App.scss'

const App = () => (
	<>
		<Intro />
		<Navigation />
		<main className='content'>
			<About />
			<Projects />
			<Contact />
		</main>
	</>
)

export default App
