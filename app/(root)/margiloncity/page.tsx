import AboutBbbGroup from './_components/about-bbbgroup'
import AboutProject from './_components/about-project'
import Decarative from './_components/decarative'
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
		</div>
	)
}

export default page
