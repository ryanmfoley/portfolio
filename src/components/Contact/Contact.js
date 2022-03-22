import './Contact.css'

const Contact = () => (
	<footer id='contact'>
		<h3 className='role text-center'>Developer</h3>
		<h3 className='name text-center m-1'>Ryan Foley</h3>
		<div className='socials d-flex justify-content-center'>
			<a href='https://github.com/ryanmfoley' rel='noreferrer' target='_blank'>
				<ion-icon name='logo-github' className='m-1'></ion-icon>
			</a>
			<a
				href='https://www.linkedin.com/in/ryanmfoley84'
				rel='noreferrer'
				target='_blank'>
				<ion-icon name='logo-linkedin' className='m-1'></ion-icon>
			</a>
			<a href='mailto:ryanmfoley84@gmail.com'>
				<ion-icon name='mail' className='m-1'></ion-icon>
			</a>
		</div>
	</footer>
)

export default Contact
