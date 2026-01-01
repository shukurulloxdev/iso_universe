import Logo from '@/app/components/shared/logo'
import { Button } from '@/components/ui/button'

function Navbar() {
	return (
		<div className='fixed inset-0 h-20 bg-gray-50 border-b z-50 max-md:pr-3 max-md:pl-1'>
			<div className='max-w-5xl mx-auto h-full flex items-center justify-between '>
				<Logo />
				<Button className='rounded-full px-6 '>Kirish</Button>
			</div>
		</div>
	)
}

export default Navbar
