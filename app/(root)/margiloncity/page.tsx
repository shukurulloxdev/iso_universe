import AboutProject from './_components/about-project'
import Decarative from './_components/decarative'
import Footer from './_components/footer'
import Hero from './_components/hero'
import Plans from './_components/plans'
import SendMessage from './_components/send-message'

function page() {
	return (
		<div>
			<Hero />
			<AboutProject />
			<Decarative img={'/margiloncity/homes/decaratsiya.png'} />
			<Plans />
			<SendMessage />
			<Decarative img={'/margiloncity/homes/uzke.jpg'} />
			{/* <AboutBbbGroup /> */}
			<Footer />
		</div>
	)
}

export default page
