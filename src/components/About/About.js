import profilePic from '../../assets/profile-pic.jpeg'
import './About.css'

const About = () => (
	<div id='about'>
		<h1 className='header text-center'>
			<strong>About</strong>
		</h1>
		<hr />
		<div className='about-container'>
			<img className='profile-pic' src={profilePic} alt='profile pic' />
			<h4 className='about-text'>
				I design and build full stack applications using technologies such as
				JavaScript, React, Node.js, Express, Python, Django, MongoDB, and
				PostgreSQL. I'm a curious programmer who loves to reverse-engineer code
				to develop a deeper understanding on how and why it works. I'm seeking a
				successful career with a company that will utilize my strong-problem
				solving, analytical, and creative thinking skill-set.
			</h4>
		</div>
	</div>
)

export default About
