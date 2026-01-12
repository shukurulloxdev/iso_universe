'use client'

import Logo from '@/components/shared/logo'
import { useEffect, useState } from 'react'

function Navbar() {
	const [show, setShow] = useState(true)
	const [lastScrollY, setLastScrollY] = useState(0)

	const handleScroll = () => {
		const currentScrollY = window.scrollY
		if (currentScrollY > lastScrollY && currentScrollY > 80) {
			setShow(false) // pastga
		} else {
			setShow(true) // tepaga
		}
		setLastScrollY(currentScrollY)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [lastScrollY])

	return (
		<header
			className={`
        fixed inset-x-0 top-0 h-20
        bg-gray-50 border-b z-50
        transition-transform duration-500
        max-md:px-3
        ${show ? 'translate-y-0' : '-translate-y-full'}
      `}
		>
			<div className='max-w-6xl mx-auto h-full flex items-center justify-between'>
				{/* 1) Logo chap tomonda */}
				<Logo />

				{/* 2) Markaziy navigatsiya (desktop) */}
				<nav className='hidden md:flex items-center gap-6 text-sm text-gray-700'>
					<a href='#projects' className='hover:text-orange-600 transition'>
						Loyihalar
					</a>
					<a href='#about' className='hover:text-orange-600 transition'>
						Biz haqimizda
					</a>
					<a href='#news' className='hover:text-orange-600 transition'>
						Yangiliklar
					</a>
					<a href='#reviews' className='hover:text-orange-600 transition'>
						Sharhlar
					</a>
				</nav>
				<a
					href='tel:+998712007400'
					className='text-xl font-semibold text-gray-700 hover:text-orange-600 transition'
				>
					+998 71 555 90 90
				</a>
			</div>
		</header>
	)
}

export default Navbar
