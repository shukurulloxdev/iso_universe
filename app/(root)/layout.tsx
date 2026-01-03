import { ChildProps } from '@/types/types'
import FloatingBell from '../components/shared/floating-bell'
import Footer from './_components/footer'
import Navbar from './_components/navbar'

function Layout({ children }: ChildProps) {
	return (
		<div>
			<Navbar />
			{children}
			<Footer />
			<FloatingBell />
		</div>
	)
}

export default Layout
