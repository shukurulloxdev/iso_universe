// 'use client'

// import Logo from '@/components/shared/logo'
// import { useEffect, useState } from 'react'

// function Navbar() {
// 	const [show, setShow] = useState(true)
// 	const [lastScrollY, setLastScrollY] = useState(0)

// 	const handleScroll = () => {
// 		const currentScrollY = window.scrollY
// 		if (currentScrollY > lastScrollY && currentScrollY > 80) {
// 			setShow(false) // pastga
// 		} else {
// 			setShow(true) // tepaga
// 		}
// 		setLastScrollY(currentScrollY)
// 	}

// 	useEffect(() => {
// 		window.addEventListener('scroll', handleScroll)
// 		return () => window.removeEventListener('scroll', handleScroll)
// 	}, [lastScrollY])

// 	return (
// 		<header
// 			className={`
//         fixed inset-x-0 top-0 h-20
//         bg-gray-50 border-b z-50
//         transition-transform duration-500
//         max-md:px-3
//         ${show ? 'translate-y-0' : '-translate-y-full'}
//       `}
// 		>
// 			<div className='max-w-6xl mx-auto h-full flex items-center justify-between'>
// 				{/* 1) Logo chap tomonda */}
// 				<Logo />

// 				{/* 2) Markaziy navigatsiya (desktop) */}
// 				<nav className='hidden md:flex items-center gap-6 text-sm text-gray-700'>
// 					<a href='#projects' className='hover:text-orange-600 transition'>
// 						Loyihalar
// 					</a>
// 					<a href='#about' className='hover:text-orange-600 transition'>
// 						Biz haqimizda
// 					</a>
// 					<a href='#news' className='hover:text-orange-600 transition'>
// 						Yangiliklar
// 					</a>
// 					<a href='#reviews' className='hover:text-orange-600 transition'>
// 						Sharhlar
// 					</a>
// 				</nav>
// 				<a
// 					href='tel:+998712007400'
// 					className='text-xl font-semibold text-gray-700 hover:text-orange-600 transition'
// 				>
// 					+998 71 555 90 90
// 				</a>
// 			</div>
// 		</header>
// 	)
// }

// export default Navbar
'use client'

import Logo from '@/components/shared/logo'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'

function Navbar() {
	const [show, setShow] = useState(true)
	const [lastScrollY, setLastScrollY] = useState(0)
	const [open, setOpen] = useState(false)

	// hide / show on scroll
	useEffect(() => {
		const handleScroll = () => {
			const current = window.scrollY
			if (current > lastScrollY && current > 80) {
				setShow(false)
			} else {
				setShow(true)
			}
			setLastScrollY(current)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [lastScrollY])

	// body lock when menu open
	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : 'auto'
	}, [open])

	return (
		<>
			<header
				className={`fixed inset-x-0 top-0 h-20 z-50
				transition-transform duration-500
				${show ? 'translate-y-0' : '-translate-y-full'}
				bg-white/80 backdrop-blur-xl border-b`}
			>
				<div className='max-w-6xl mx-auto h-full flex items-center justify-between px-4'>
					{/* LOGO */}
					<Logo />

					{/* DESKTOP NAV */}
					<nav className='hidden md:flex items-center gap-8 text-sm text-gray-700'>
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

					{/* DESKTOP PHONE */}
					<a
						href='tel:+998712007400'
						className='hidden md:block text-lg font-semibold
						text-gray-700 hover:text-orange-600 transition'
					>
						+998 71 555 90 90
					</a>

					{/* MOBILE MENU BUTTON */}
					<button
						onClick={() => setOpen(true)}
						className='md:hidden p-2 rounded-xl
						bg-gray-100 active:scale-95 transition'
					>
						<Menu />
					</button>
				</div>
			</header>

			{/* ================= MOBILE MENU ================= */}
			<AnimatePresence>
				{open && (
					<>
						{/* overlay */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setOpen(false)}
							className='fixed inset-0 bg-black/40 z-40'
						/>

						{/* menu */}
						<motion.div
							initial={{ y: '-100%' }}
							animate={{ y: 0 }}
							exit={{ y: '-100%' }}
							transition={{ duration: 0.5, ease: 'easeInOut' }}
							className='fixed top-0 inset-x-0 z-50
							bg-white rounded-b-3xl shadow-2xl'
						>
							<div className='p-6'>
								{/* HEADER */}
								<div className='flex items-center justify-between'>
									<Logo />
									<button
										onClick={() => setOpen(false)}
										className='p-2 rounded-xl bg-gray-100'
									>
										<X />
									</button>
								</div>

								{/* LINKS */}
								<nav className='mt-10 flex flex-col gap-6 text-lg font-medium text-gray-800'>
									<a onClick={() => setOpen(false)} href='#projects'>
										Loyihalar
									</a>
									<a onClick={() => setOpen(false)} href='#about'>
										Biz haqimizda
									</a>
									<a onClick={() => setOpen(false)} href='#news'>
										Yangiliklar
									</a>
									<a onClick={() => setOpen(false)} href='#reviews'>
										Sharhlar
									</a>
								</nav>

								{/* CTA */}
								<div className='mt-10'>
									<a
										href='tel:+998712007400'
										className='flex items-center justify-center gap-3
										w-full py-4 rounded-2xl
										bg-orange-500 text-white text-lg font-semibold
										active:scale-95 transition'
									>
										<Phone />
										Qo‘ng‘iroq qilish
									</a>
								</div>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	)
}

export default Navbar
