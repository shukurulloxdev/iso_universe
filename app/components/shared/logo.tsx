import Image from 'next/image'
import Link from 'next/link'

function Logo() {
	return (
		<Link href={'/'} className='relative w-36 h-12 md:w-44 md:h-14'>
			<Image
				src='/logo/uz.jpg'
				alt='logo'
				fill
				className='transition-transform duration-500 lg:hover:scale-105 lg:hover:rotate-3 cursor-pointer'
			/>
		</Link>
	)
}

export default Logo
