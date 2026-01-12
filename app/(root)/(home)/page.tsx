import FloatingBell from '@/components/shared/floating-bell'
import Footer from '../_components/footer'
import Navbar from '../_components/navbar'
import Addresses from './_components/addresses'
import Hero from './_components/hero'
import Komforts from './_components/komforts'
import Projects from './_components/projects'
import Useds from './_components/useds'

function Page() {
	return (
		<>
			<Navbar />
			<div className='w-full'>
				<Hero />
				{/* <Statistics /> */}
				<Projects />
				<Komforts />
				<Useds />
				<Addresses />
				{/* <Aboutus /> */}
			</div>
			<Footer />
			<FloatingBell />
		</>
	)
}

export default Page
