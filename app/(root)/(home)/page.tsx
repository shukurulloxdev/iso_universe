import Aboutus from './_components/aboutus'
import Hero from './_components/hero'
import Projects from './_components/projects'
import Reviews from './_components/reviews'
import Statistics from './_components/statistics'

function Page() {
	return (
		<div className='w-full'>
			<Hero />
			<Statistics />
			<Projects />
			<Aboutus />
			<Reviews />
		</div>
	)
}

export default Page
