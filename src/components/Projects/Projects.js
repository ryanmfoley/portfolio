import { Card } from 'react-bootstrap'

import minesweeper from '../../assets/minesweeper.png'
import magicTheGathering from '../../assets/mtg.png'
import playMeChess from '../../assets/play-me-chess.png'

import './Projects.css'

const Projects = () => (
	<div id='projects'>
		<h1 className='header text-center'>
			<strong>Projects</strong>
		</h1>
		<hr />
		<div className='projects-container d-flex justify-content-around flex-wrap my-5'>
			<Card style={{ width: '18rem' }}>
				<a
					href='https://ryfoa6.github.io/Minesweeper'
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
							href='https://github.com/ryfoa6/Minesweeper'
							rel='noreferrer'
							target='_blank'>
							<strong>View Code</strong>
						</a>
						<a
							className='text-secondary'
							href='https://ryfoa6.github.io/Minesweeper'
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
			<Card style={{ width: '18rem' }}>
				<a
					href='https://play-me-chess.herokuapp.com'
					rel='noreferrer'
					target='_blank'>
					<Card.Img variant='top' src={playMeChess} />
				</a>
				<Card.Title className='py-3 text-center'>
					<strong>Play-Me-Chess</strong>
				</Card.Title>
				<Card.Body>
					<Card.Text>
						<p className='text-dark'>
							Play-Me-Chess is a chess game I built from scratch using
							JavaScript and the DOM. The back-end was built using NodeJS,
							Express, Mongoose, and Socket.io.
						</p>
						<a
							className='d-block text-secondary'
							href='https://github.com/ryfoa6/play-me-chess'
							rel='noreferrer'
							target='_blank'>
							<strong>View Code</strong>
						</a>
						<a
							className='text-secondary'
							href='https://play-me-chess.herokuapp.com'
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
								JavaScript, NodeJS, Socket.io, Mongoose, Bootstrap
							</strong>
						</p>
					</Card.Text>
				</Card.Footer>
			</Card>
			<Card style={{ width: '18rem' }}>
				<a
					href='https://ryfoa6-magic-the-gathering.herokuapp.com/'
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
							href='https://github.com/ryfoa6/magic-the-gathering/tree/master'
							rel='noreferrer'
							target='_blank'>
							<strong>View Code</strong>
						</a>
						<a
							className='text-secondary'
							href='https://ryfoa6-magic-the-gathering.herokuapp.com/'
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
		</div>
	</div>
)

export default Projects
