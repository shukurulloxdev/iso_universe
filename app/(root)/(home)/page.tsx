import Hero from './_components/hero'
import Projects from './_components/projects'
import Statistics from './_components/statistics'

function Page() {
	return (
		<div className='w-full'>
			<Hero />
			<Statistics />
			<Projects />
		</div>
	)
}

export default Page
