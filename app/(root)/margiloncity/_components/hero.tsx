'use client'

import { Button } from '@/components/ui/button'
import { AnimatePresence, motion } from 'framer-motion'
import {
	MapPinHouse,
	Menu,
	MessageSquareText,
	Phone,
	PhoneCall,
	X,
} from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Hero() {
	const images = [
		'/margiloncity/img1.webp',
		'/margiloncity/img2.webp',
		'/margiloncity/img4.jpg',
		'/margiloncity/img6.jpg',
		'/margiloncity/img5.jpg',
	]

	const [open, setOpen] = useState(false)
	const [index, setIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex(prev => (prev + 1) % images.length)
		}, 4000)
		return () => clearInterval(interval)
	}, [])

	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : 'auto'
	}, [open])

	return (
		<>
			<div className='relative h-screen w-full max-md:h-[70vh] overflow-hidden'>
				{/* ===== BACKGROUND SLIDER ===== */}
				<AnimatePresence mode='sync'>
					<motion.div
						key={index}
						className='absolute inset-0'
						initial={{ opacity: 0 }}
						animate={{ opacity: 2 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.6 }} // faqat almashishda animatsiya
					>
						<div className='absolute inset-0 animate-[slow-zoom_4s_linear_forwards]'>
							<Image
								src={images[index]}
								alt='Hero background'
								fill
								priority
								sizes='100vw'
								className='object-cover object-center max-md:object-cover top scale-105'
							/>
						</div>
						<div className='max-md:hidden absolute inset-0 bg-black/60' />
						<div className='md:hidden absolute inset-0 bg-[rgba(0,0,20,0.5)]' />
					</motion.div>
				</AnimatePresence>

				{/*  NAVBAR  */}
				<header className='absolute top-0 z-20 w-full'>
					<div className='mx-auto max-w-7xl px-4 py-6 flex items-center justify-between'>
						<div className='flex flex-col gap-1 leading-none select-none'>
							<span className='font-serif font-extrabold max-md:text-[20px] text-4xl bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-600 bg-clip-text text-transparent leading-tight scale-y-100'>
								Marg&apos;ilon City
							</span>

							<div className='flex items-center text-center gap-3 '>
								<span className='text-[8px]  font-semibold tracking-[0.25em] text-yellow-300/80 uppercase'>
									by BESH BOLA BUILDINGS
								</span>
							</div>
						</div>
						<div className='md:hidden flex items-center gap-2'>
							<button className='bg-white/10 backdrop-blur px-4 text-white py-2 rounded-full hover:bg-white/20 transition'>
								<MapPinHouse size={17} />
							</button>
							<button
								onClick={() => setOpen(true)}
								className='bg-white/10 backdrop-blur px-4 text-white py-2 rounded-full hover:bg-white/20 transition'
							>
								<Menu size={17} />
							</button>
						</div>

						{/* MENU */}
						<nav className='hidden md:flex items-center gap-8 text-[14px] text-white/85'>
							{[
								'Loyiha haqida',
								'Bloklar joylashuvi',
								'Rejalashtirish',
								'Kompaniya haqida',
								'Bog‘lanish',
							].map(item => (
								<span
									key={item}
									className='cursor-pointer transition hover:text-white'
								>
									{item}
								</span>
							))}
						</nav>
						<div className='hidden md:flex items-center gap-6 text-white'>
							<button className='flex items-center gap-2 text-sm bg-white/10 backdrop-blur px-4 py-2 rounded-full hover:bg-white/20 transition'>
								<Phone />
								78 555 9090
							</button>
							<button className='flex items-center gap-2 text-sm bg-white/10 backdrop-blur px-4 py-2 rounded-full hover:bg-white/20 transition'>
								<MapPinHouse />
								Joylashuv
							</button>
						</div>
					</div>
					<div className=' max-w-7xl mx-auto flex justify-end  px-4'>
						<div className='relative w-20 h-20 max-md:w-14 max-md:h-14	'>
							<Image
								src={'/margiloncity/logo/ruhsatnoma.png'}
								alt='ruhsatnoma'
								fill
							/>
						</div>
					</div>
				</header>

				{/* ===== HERO CONTENT ===== */}
				<div className='max-md:hidden relative z-10 mx-auto max-w-7xl h-full px-4 pb-16 flex items-center justify-between'>
					<div className='flex flex-col gap-6 text-white self-end'>
						<h1 className='max-w-3xl flex flex-col gap-2 text-3xl md:text-5xl font-bold font-work leading-tight '>
							<span>Qulay va farovon hayot</span>{' '}
							<span>uchun ideal shaharcha</span>
						</h1>

						<p className='max-w-xl text-sm md:text-lg text-white/85'>
							Marg‘ilon shahrida barpo etilayotgan zamonaviy, xavfsiz va qulay
							turar-joy majmuasi, farovon hayot uchun barcha zarur qulayliklar
							va zamonaviy infrastruktura bilan ta`minlangan. Siz va oilangiz
							uchun.
						</p>

						<div className='flex flex-wrap gap-4 max-md:hidden'>
							<Button
								size={'lg'}
								className='rounded-full bg-yellow-500 text-sm font-semibold text-black hover:bg-yellow-400 transition'
							>
								Rejalashtirishni tanlash
							</Button>

							<Button
								size={'lg'}
								className='rounded-full border border-white/40 px-6 py-3 text-sm hover:bg-white/10 transition bg-transparent'
							>
								Batafsil ma’lumot
							</Button>
						</div>
					</div>
					<div className='self-end flex flex-col gap-4'>
						<div className='w-16 h-16 cursor-pointer rounded-full bg-orange-500 flex items-center justify-center shadow-lg active:scale-95 transition'>
							<MessageSquareText size={27} className='text-white' />
						</div>
						<a
							href='tel:+998785559090'
							className='w-16 h-16 rounded-full cursor-pointer  bg-orange-500 flex items-center justify-center shadow-lg active:scale-95 transition '
						>
							<PhoneCall size={27} className='text-white' />
						</a>
					</div>
				</div>
				<div className='md:hidden absolute left-0 right-0 bottom-8 z-20 px-4 text-white'>
					<div className='flex items-end justify-between gap-2'>
						<div className=' pr-2'>
							<h1 className='text-2xl font-bold leading-tight drop-shadow-2xl'>
								Qulay va farovon hayot uchun ideal shaharcha
							</h1>

							<p className='mt-4 text-sm leading-relaxed text-white/90'>
								Marg‘ilon shahrida barpo etilayotgan zamonaviy, xavfsiz va qulay
								turar-joy majmuasi.
							</p>
						</div>

						<div className='flex flex-col items-center gap-3'>
							<div className='w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center shadow-lg active:scale-95 transition'>
								<MessageSquareText size={20} className='text-white' />
							</div>
							<a
								href='tel:+998785559090'
								className='w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center shadow-lg active:scale-95 transition '
							>
								<PhoneCall size={20} className='text-white' />
							</a>
						</div>
					</div>
					<Button className='w-full mt-4 bg-white/10 backdrop-blur text-white rounded-full hover:bg-white/20 transition'>
						Honadon rejalashtirish
					</Button>
				</div>
			</div>
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
									<div className='flex flex-col gap-1 leading-none select-none'>
										<span className='font-serif font-extrabold max-md:text-[20px] text-4xl bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-600 bg-clip-text text-transparent leading-tight scale-y-100'>
											Marg&apos;ilon City
										</span>

										<div className='flex items-center text-center gap-3 '>
											<span className='text-[8px]  font-semibold tracking-[0.25em] text-yellow-300/80 uppercase'>
												by BESH BOLA BUILDINGS
											</span>
										</div>
									</div>
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
										Loyiha haqida
									</a>
									<a onClick={() => setOpen(false)} href='#about'>
										Loyiha joylashuvi
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
										w-full py-[6px] rounded-2xl
										bg-orange-500 text-white  font-semibold
										active:scale-95 transition'
									>
										<Phone size={20} />
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

// 'use client'

// import { Button } from '@/components/ui/button'
// import { Menu, Phone } from 'lucide-react'
// import Image from 'next/image'

// export default function Hero() {
// 	return (
// 		<section className='relative w-full h-[100svh] overflow-hidden'>
// 			{/* BACKGROUND */}
// 			<Image
// 				src='/margiloncity/img1.webp'
// 				alt='Crystal Avenue'
// 				fill
// 				priority
// 				className='object-cover'
// 			/>
// 			<div className='absolute inset-0 bg-black/55' />

// 			{/* HEADER */}
// 			<div className='absolute top-0 left-0 right-0 z-20 px-4 pt-4 flex items-center justify-between text-white'>
// 				<div>
// 					<p className='text-sm tracking-wide'>CRYSTAL AVENUE</p>
// 					<p className='text-[10px] opacity-70'>KO‘P QAVATLI MAJMUASI</p>
// 				</div>

// 				<div className='flex items-center gap-3'>
// 					<div className='flex items-center gap-1 font-semibold'>
// 						<Phone size={16} />
// 						<span>1361</span>
// 					</div>
// 					<Menu />
// 				</div>
// 			</div>

// 			{/* GOLD BADGE */}
// 			<div className='absolute top-24 right-4 z-20'>
// 				<Image
// 					src='/badge.png' // ⚠️ badge rasm bo‘lishi kerak
// 					alt='badge'
// 					width={64}
// 					height={64}
// 				/>
// 			</div>

// 			{/* CONTENT */}
// 			<div className='absolute bottom-32 left-0 right-0 z-20 px-4 text-white'>
// 				<h1 className='text-2xl font-bold leading-snug'>
// 					Butun oila uchun <br />
// 					mukammal qulayliklarga ega <br />
// 					xonadonlar
// 				</h1>

// 				<p className='text-sm opacity-85 mt-3 leading-relaxed'>
// 					Crystal Avenue – TXT Group kompaniyasi tomonidan Farg‘ona shahrida
// 					barpo etilayotgan ko‘p qavatli, komfort toifadagi turar-joy majmuasi.
// 				</p>
// 			</div>

// 			{/* CTA */}
// 			<div className='absolute bottom-12 left-0 right-0 z-20 px-4'>
// 				<Button className='w-full rounded-full bg-green-700 hover:bg-green-800 text-white py-6 text-base'>
// 					Rejalashtirishni tanlash
// 				</Button>
// 			</div>

// 			{/* FLOATING BUTTONS */}
// 			<div className='absolute bottom-36 right-4 z-30 flex flex-col gap-3'>
// 				<div className='bg-green-700 text-white text-xs px-3 py-1 rounded-full'>
// 					Live
// 				</div>
// 				<button className='w-12 h-12 rounded-full bg-green-700 flex items-center justify-center'>
// 					<Phone className='text-white' />
// 				</button>
// 			</div>
// 		</section>
// 	)
// }
