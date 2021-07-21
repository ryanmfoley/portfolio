import { Card } from 'react-bootstrap'

import minesweeper from '../../assets/minesweeper.png'
import magicTheGathering from '../../assets/mtg.png'
import playMeChess from '../../assets/play-me-chess.png'
import gudeeds from '../../assets/gudeeds.png'
import jotIt from '../../assets/jot-it.png'
import octopiTrivia from '../../assets/octopi-trivia.png'
import './Projects.css'

const Projects = () => (
	<div id='projects'>
		<h1 className='header text-center'>
			<strong>Projects</strong>
		</h1>
		<hr />
		<projects className='projects-container d-flex justify-content-around flex-wrap my-5'>
			<Card className='my-3' style={{ width: '18rem' }}>
				<a
					href='https://ryanmfoley.github.io/minesweeper'
					rel='noreferrer'
					target='_blank'>
					<Card.Img variant='top' src={minesweeper} />
				</a>
				<Card.Title className='py-3 text-center'>
					<strong>Minesweeper</strong>
				</Card.Title>
				<Card.Body>
					<Card.Text>
						<p className='text-dark'>
							Minesweeper was the first game I created. Using JavaScript and the
							DOM I created a Minesweeper game people of all ages could play.
						</p>
						<a
							className='d-block text-secondary'
							href='https://github.com/ryanmfoley/minesweeper'
							rel='noreferrer'
							target='_blank'>
							<strong>View Code</strong>
						</a>
						<a
							className='text-secondary'
							href='https://ryanmfoley.github.io/minesweeper/'
							rel='noreferrer'
							target='_blank'>
							<strong>View Deployed App</strong>
						</a>
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Card.Text>
						<h5 className='text-dark'>
							<strong>Technologies: </strong>
						</h5>
						<p className='text-dark'>
							<strong>JavaScript, DOM</strong>
						</p>
					</Card.Text>
				</Card.Footer>
			</Card>
			<Card className='my-3' style={{ width: '18rem' }}>
				<a href='http://www.playmechess.com/' rel='noreferrer' target='_blank'>
					<Card.Img variant='top' src={playMeChess} />
				</a>
				<Card.Title className='py-3 text-center'>
					<strong>Play-Me-Chess</strong>
				</Card.Title>
				<Card.Body>
					<Card.Text>
						<p className='text-dark'>
							Play-Me-Chess is a chess game that I built from scratch. The
							front-end was built with Vanilla JavaScript and the DOM while the
							back-end was built with Express, MongoDB/Mongoose, and Socket.io.
						</p>
						<a
							className='d-block text-secondary'
							href='https://github.com/ryanmfoley/play-me-chess'
							rel='noreferrer'
							target='_blank'>
							<strong>View Code</strong>
						</a>
						<a
							className='text-secondary'
							href='http://www.playmechess.com/'
							rel='noreferrer'
							target='_blank'>
							<strong>View Deployed App</strong>
						</a>
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Card.Text>
						<h5 className='text-dark'>
							<strong>Technologies: </strong>
						</h5>
						<p className='text-dark'>
							<strong>
								JavaScript, NodeJS, Express, MongoDB/Mongoose, Socket.io,
								Bootstrap, Sass
							</strong>
						</p>
					</Card.Text>
				</Card.Footer>
			</Card>
			<Card className='my-3' style={{ width: '18rem' }}>
				<a
					href='https://magicthegathering-builder.herokuapp.com/'
					rel='noreferrer'
					target='_blank'>
					<Card.Img variant='top' src={magicTheGathering} />
				</a>
				<Card.Title className='py-3 text-center'>
					<strong>Magic The Gathering Deck Builder</strong>
				</Card.Title>
				<Card.Body>
					<Card.Text>
						<p className='text-dark'>
							I combined my passion of Magic The Gathering and Programming to
							build a Magic The Gathering deck builder app. Users can build
							their own custom decks which can then be saved locally.
						</p>
						<a
							className='d-block text-secondary'
							href='https://github.com/ryanmfoley/magic-the-gathering'
							rel='noreferrer'
							target='_blank'>
							<strong>View Code</strong>
						</a>
						<a
							className='text-secondary'
							href='https://magicthegathering-builder.herokuapp.com/'
							rel='noreferrer'
							target='_blank'>
							<strong>View Deployed App</strong>
						</a>
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Card.Text>
						<h5 className='text-dark'>
							<strong>Technologies: </strong>
						</h5>
						<p className='text-dark'>
							<strong>JavaScript, React, Bootstrap</strong>
						</p>
					</Card.Text>
				</Card.Footer>
			</Card>
			<Card className='my-3' style={{ width: '18rem' }}>
				<a
					href='https://octopi-trivia.herokuapp.com'
					rel='noreferrer'
					target='_blank'>
					<Card.Img variant='top' src={octopiTrivia} />
				</a>
				<Card.Title className='py-3 text-center'>
					<strong>Octopi Trivia</strong>
				</Card.Title>
				<Card.Body>
					<Card.Text>
						<p className='text-dark'>
							My first Outcomes Sprint project at General Assembly I worked with
							a team of engineers paired with a team of UX designers and built a
							Trivia application to help user test their knowledge.
						</p>
						<a
							className='d-block text-secondary'
							href='https://github.com/ryanmfoley/octopi-trivia'
							rel='noreferrer'
							target='_blank'>
							<strong>View Code</strong>
						</a>
						<a
							className='text-secondary'
							href='https://octopi-trivia.herokuapp.com'
							rel='noreferrer'
							target='_blank'>
							<strong>View Deployed App</strong>
						</a>
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Card.Text>
						<h5 className='text-dark'>
							<strong>Technologies: </strong>
						</h5>
						<p className='text-dark'>
							<strong>
								JavaScript, NodeJS, Express, MongoDB/Mongoose, EJS
							</strong>
						</p>
					</Card.Text>
				</Card.Footer>
			</Card>
			<Card className='my-3' style={{ width: '18rem' }}>
				<a
					href='https://jot-it-projects.netlify.app/'
					rel='noreferrer'
					target='_blank'>
					<Card.Img variant='top' src={jotIt} />
				</a>
				<Card.Title className='py-3 text-center'>
					<strong>Jot-It</strong>
				</Card.Title>
				<Card.Body>
					<Card.Text>
						<p className='text-dark'>
							For my third project at General Assembly I worked with my team of
							developer to develop a project management app where users can can
							manage their tasks and chat with their teammates.
						</p>
						<a
							className='d-block text-secondary'
							href='https://github.com/ryanmfoley/jot-it'
							rel='noreferrer'
							target='_blank'>
							<strong>View Front-end Code</strong>
						</a>
						<a
							className='d-block text-secondary'
							href='https://github.com/ryanmfoley/jot-it-server'
							rel='noreferrer'
							target='_blank'>
							<strong>View Back-end Code</strong>
						</a>
						<a
							className='text-secondary'
							href='https://jot-it-projects.netlify.app/'
							rel='noreferrer'
							target='_blank'>
							<strong>View Deployed App</strong>
						</a>
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Card.Text>
						<h5 className='text-dark'>
							<strong>Technologies: </strong>
						</h5>
						<p className='text-dark'>
							<strong>
								JavaScript, React, NodeJS, Express, MongoDB/Mongoose, Socket.io,
								Bootstrap, Sass
							</strong>
						</p>
					</Card.Text>
				</Card.Footer>
			</Card>
			<Card className='my-3' style={{ width: '18rem' }}>
				<a href='https://www.gudeeds.xyz' rel='noreferrer' target='_blank'>
					<Card.Img variant='top' src={gudeeds} />
				</a>
				<Card.Title className='py-3 text-center'>
					<strong>Güdeeds</strong>
				</Card.Title>
				<Card.Body>
					<Card.Text>
						<p className='text-dark'>
							My first hackathon application created from the prompt of “helping
							caregivers”. Worked on a team of engineers paired with a team of
							UX designers. Our web app is built using React, with a node
							backend for handling API requests, and runs on Heroku.
						</p>
						<a
							className='d-block text-secondary'
							href='https://github.com/ryanmfoley/favorsApp_FE'
							rel='noreferrer'
							target='_blank'>
							<strong>View Front-end Code</strong>
						</a>
						<a
							className='d-block text-secondary'
							href='https://github.com/ryanmfoley/localCommunity_favorsApp'
							rel='noreferrer'
							target='_blank'>
							<strong>View Back-end Code</strong>
						</a>
						<a
							className='text-secondary'
							href='https://www.gudeeds.xyz'
							rel='noreferrer'
							target='_blank'>
							<strong>View Deployed App</strong>
						</a>
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Card.Text>
						<h5 className='text-dark'>
							<strong>Technologies: </strong>
						</h5>
						<p className='text-dark'>
							<strong>
								JavaScript, React, NodeJS, Express, MongoDB/Mongoose,
								Material-UI
							</strong>
						</p>
					</Card.Text>
				</Card.Footer>
			</Card>
		</projects>
	</div>
)

export default Projects
