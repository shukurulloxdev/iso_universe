import AboutProject from './_components/about-project'
import Footer from './_components/footer'
import Hero from './_components/hero'
import Plans from './_components/plans'
import SendMessage from './_components/send-message'

function page() {
	return (
		<div>
			<Hero />
			<AboutProject />
			<Plans />
			<SendMessage />
			{/* <Decarative /> */}
			{/* <AboutBbbGroup /> */}
			<Footer />
		</div>
	)
}

export default page
