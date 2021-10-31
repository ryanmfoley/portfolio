import { Card } from 'react-bootstrap'

import holdemVideo from '../../assets/videos/headsUp-holdem.mp4'
import minesweeper from '../../assets/images/minesweeper.png'
import magicTheGathering from '../../assets/images/mtg.png'
import playMeChess from '../../assets/images/play-me-chess.png'
import gudeeds from '../../assets/images/gudeeds.png'
import jotIt from '../../assets/images/jot-it.png'
import octopiTrivia from '../../assets/images/octopi-trivia.png'
import './Projects.css'

const Projects = () => (
	<div id='projects'>
		<h1 className='header text-center'>
			<strong>Projects</strong>
		</h1>
		<hr className='mb-5' />

		{/* ---------- Heads-Up Hold'em project ---------- */}
		<Card className='my-3' style={{ width: '80%', margin: 'auto' }}>
			<video src={holdemVideo} width='100%' controls autoPlay></video>
			<Card.Title className='py-3 text-center'>
				<strong>Heads-Up Hold'em</strong>
			</Card.Title>
			<Card.Body>
				<Card.Text className='text-dark' as='p'>
					<strong>Heads-Up Hold'em</strong> is a full-stack poker application
					built with the MERN-stack, where a user can create an account and play
					$10/$20 Heads-Up No-Limit Texas Hold'em against an opponent. Each
					player starts with $10k in play chips every game.
					<br />
					<br />
					The Frontend is a React application while the server was built with a
					Node/Express backend. In-game logic-related communications & chat is
					handled via web sockets.
				</Card.Text>
				<a
					className='d-block text-secondary'
					href='https://github.com/ryanmfoley/headsup-holdem-frontend'
					rel='noreferrer'
					target='_blank'>
					<strong>View Front-end Code</strong>
				</a>
				<a
					className='d-block text-secondary'
					href='https://github.com/ryanmfoley/headsup-holdem-backend'
					rel='noreferrer'
					target='_blank'>
					<strong>View Back-end Code</strong>
				</a>
				<a
					className='text-secondary'
					href='https://www.headsup-holdem.netlify.app'
					rel='noreferrer'
					target='_blank'>
					<strong>View Deployed App</strong>
				</a>
			</Card.Body>
			<Card.Footer>
				<Card.Text className='text-dark' as='h5'>
					<strong>Technologies: </strong>
				</Card.Text>
				<Card.Text className='text-dark' as='p'>
					<strong>
						JavaScript, React, NodeJS, Express, MongoDB/Mongoose, Socket.io,
						Material-UI
					</strong>
				</Card.Text>
			</Card.Footer>
		</Card>

		<div className='projects-container d-flex justify-content-around flex-wrap my-5'>
			{/* ---------- Minesweeper project ---------- */}
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
					<Card.Text className='text-dark' as='p'>
						Minesweeper was the first game I created. Using JavaScript and the
						DOM I created a Minesweeper game people of all ages could play.
					</Card.Text>
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
				</Card.Body>
				<Card.Footer>
					<Card.Text className='text-dark' as='h5'>
						<strong>Technologies: </strong>
					</Card.Text>
					<Card.Text className='text-dark' as='p'>
						<strong>JavaScript, DOM</strong>
					</Card.Text>
				</Card.Footer>
			</Card>

			{/* ---------- Play-Me-Chess project ---------- */}
			<Card className='my-3' style={{ width: '18rem' }}>
				<a href='http://www.playmechess.com/' rel='noreferrer' target='_blank'>
					<Card.Img variant='top' src={playMeChess} />
				</a>
				<Card.Title className='py-3 text-center'>
					<strong>Play-Me-Chess</strong>
				</Card.Title>
				<Card.Body>
					<Card.Text className='text-dark' as='p'>
						Play-Me-Chess is a chess game that I built from scratch. The
						front-end was built with Vanilla JavaScript and the DOM while the
						back-end was built with Express, MongoDB/Mongoose, and Socket.io.
					</Card.Text>
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
				</Card.Body>
				<Card.Footer>
					<Card.Text className='text-dark' as='h5'>
						<strong>Technologies: </strong>
					</Card.Text>
					<Card.Text className='text-dark' as='p'>
						<strong>
							JavaScript, NodeJS, Express, MongoDB/Mongoose, Socket.io,
							Bootstrap, Sass
						</strong>
					</Card.Text>
				</Card.Footer>
			</Card>

			{/* ---------- Magic-The-Gathering-builder project ---------- */}
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
					<Card.Text className='text-dark' as='p'>
						I combined my passion of Magic The Gathering and Programming to
						build a Magic The Gathering deck builder app. Users can build their
						own custom decks which can then be saved locally.
					</Card.Text>
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
				</Card.Body>
				<Card.Footer>
					<Card.Text className='text-dark' as='h5'>
						<strong>Technologies: </strong>
					</Card.Text>
					<Card.Text className='text-dark' as='p'>
						<strong>JavaScript, React, Bootstrap</strong>
					</Card.Text>
				</Card.Footer>
			</Card>

			{/* ---------- Octopi-Trivia project ---------- */}
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
					<Card.Text className='text-dark' as='p'>
						My first Outcomes Sprint project at General Assembly I worked with a
						team of engineers paired with a team of UX designers and built a
						Trivia application to help users test their knowledge.
					</Card.Text>
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
				</Card.Body>
				<Card.Footer>
					<Card.Text className='text-dark' as='h5'>
						<strong>Technologies: </strong>
					</Card.Text>
					<Card.Text className='text-dark' as='p'>
						<strong>JavaScript, NodeJS, Express, MongoDB/Mongoose, EJS</strong>
					</Card.Text>
				</Card.Footer>
			</Card>

			{/* ---------- Jot-It project ---------- */}
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
					<Card.Text className='text-dark' as='p'>
						For my third project at General Assembly I worked with my team of
						developers to develop a project management app where users can can
						manage their tasks and chat with their teammates.
					</Card.Text>
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
				</Card.Body>
				<Card.Footer>
					<Card.Text className='text-dark' as='h5'>
						<strong>Technologies: </strong>
					</Card.Text>
					<Card.Text className='text-dark' as='p'>
						<strong>
							JavaScript, React, NodeJS, Express, MongoDB/Mongoose, Socket.io,
							Bootstrap, Sass
						</strong>
					</Card.Text>
				</Card.Footer>
			</Card>

			{/* ---------- Güdeeds project ---------- */}
			<Card className='my-3' style={{ width: '18rem' }}>
				<a href='https://www.gudeeds.xyz' rel='noreferrer' target='_blank'>
					<Card.Img variant='top' src={gudeeds} />
				</a>
				<Card.Title className='py-3 text-center'>
					<strong>Güdeeds</strong>
				</Card.Title>
				<Card.Body>
					<Card.Text className='text-dark' as='p'>
						My first hackathon application created from the prompt of “helping
						caregivers”. Worked on a team of engineers paired with a team of UX
						designers. Our web app is built using React, with a node backend for
						handling API requests, and runs on Heroku.
					</Card.Text>
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
				</Card.Body>
				<Card.Footer>
					<Card.Text className='text-dark' as='h5'>
						<strong>Technologies: </strong>
					</Card.Text>
					<Card.Text className='text-dark' as='p'>
						<strong>
							JavaScript, React, NodeJS, Express, MongoDB/Mongoose, Material-UI
						</strong>
					</Card.Text>
				</Card.Footer>
			</Card>
		</div>
	</div>
)

export default Projects
