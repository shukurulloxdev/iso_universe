'use client'

import Logo from '@/components/cards/shared/logo'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

function Navbar() {
	const [show, setShow] = useState(true)
	const [lastScrollY, setLastScrollY] = useState(0)

	const handleScroll = () => {
		const currentScrollY = window.scrollY

		if (currentScrollY > lastScrollY && currentScrollY > 80) {
			// pastga scroll
			setShow(false)
		} else {
			// tepaga scroll
			setShow(true)
		}

		setLastScrollY(currentScrollY)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [lastScrollY])

	return (
		<div
			className={`
        fixed top-0 left-0 w-full h-20
        bg-gray-50 border-b z-50
        transition-transform duration-500
				max-md:px-3
        ${show ? 'translate-y-0' : '-translate-y-full'}
      `}
		>
			<div className='max-w-6xl mx-auto h-full flex items-center justify-between'>
				<Logo />
				<Button className='rounded-full px-6 bg-orange-600'>Kirish</Button>
			</div>
		</div>
	)
}

export default Navbar
