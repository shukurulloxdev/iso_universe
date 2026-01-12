import AboutBbbGroup from './_components/about-bbbgroup'
import AboutProject from './_components/about-project'
import Decarative from './_components/decarative'
import Footer from './_components/footer'
import Hero from './_components/hero'
import Plans from './_components/plans'

function page() {
	return (
		<div>
			<Hero />
			<AboutProject />
			<Plans />
			<Decarative />
			<AboutBbbGroup />
			<Footer />
		</div>
	)
}

export default page
