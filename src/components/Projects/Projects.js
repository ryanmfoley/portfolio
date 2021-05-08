import React from 'react'

import './Projects.css'

const Projects = () => (
	<div className='projects'>
		<h1>Projects</h1>
		<div className='project'>
			<h3>Play-Me-Chess</h3>
			<h5>Technologies: </h5>{' '}
			<p>JavaScript, NodeJS, Socket.io, Mongoose, Bootstrap</p>
			<p>
				I created a site where users can battle their friends playing chess
				online. The front-end is built using JavaScript and the DOM. The
				back-end is build using NodeJS and Socket.io so that users can create
				game rooms for two player functionality.
			</p>
			<h5>Deployed App: </h5>
			<a href='https://play-me-chess.herokuapp.com/'>
				https://play-me-chess.herokuapp.com/
			</a>
			<h5>Github: </h5>
			<a href='https://github.com/ryfoa6/play-me-chess'>
				https://github.com/ryfoa6/play-me-chess
			</a>
		</div>
		<div className='project'>
			<h3>Minesweeper</h3>
			<h5>Technologies: </h5> <p>JavaScript</p>
			<p>
				For project 1 at General Assembly I created a Minesweeper game with
				JavaScript and the DOM.
			</p>
			<h5>Deployed App: </h5>
			<a href='https://ryfoa6.github.io/Minesweeper'>
				https://ryfoa6.github.io/Minesweeper
			</a>
			<h5>Github: </h5>
			<a href='https://github.com/ryfoa6/Minesweeper'>
				https://github.com/ryfoa6/Minesweeper
			</a>
		</div>
		<div className='project'>
			{' '}
			<h3>Magic The Gathering Deck Builder</h3>
			<h5>Technologies: </h5> <p>JavaScript, React</p>
			<p>
				I combined my passion with Magic The Gathering and Programming and built
				a Magic The Gathering deck builder site. Users can build their own deck
				and save their decks locally.
			</p>
			<h5>Deployed App: </h5>
			<a href='https://ryfoa6-magic-the-gathering.herokuapp.com/'>
				https://ryfoa6-magic-the-gathering.herokuapp.com/
			</a>
			<h5>Github: </h5>
			<a href='https://github.com/ryfoa6/magic-the-gathering/tree/master'>
				https://github.com/ryfoa6/magic-the-gathering/tree/master
			</a>
		</div>
	</div>
)

export default Projects
