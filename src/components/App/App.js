import About from '../About/About'
import Contact from '../Contact/Contact'
import Intro from '../Intro/Intro'
import Navigation from '../Navigation/Navigation'
import Projects from '../Projects/Projects'
import './App.scss'

const App = () => (
	<>
		<Intro />
		<Navigation />
		<main>
			<About />
			<Projects />
			<Contact />
		</main>
	</>
)

export default App
