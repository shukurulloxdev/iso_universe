// 'use client'

// import { Button } from '@/components/ui/button'
// import { AnimatePresence, motion } from 'framer-motion'
// import Image from 'next/image'
// import { useEffect, useState } from 'react'

// function Hero() {
// 	const images = [
// 		'/margiloncity/img1.webp',
// 		'/margiloncity/img2.webp',
// 		'/margiloncity/img4.jpg',
// 		'/margiloncity/img6.jpg',
// 		'/margiloncity/img5.jpg',
// 	]
// 	const [index, setIndex] = useState(0)

// 	useEffect(() => {
// 		const interval = setInterval(() => {
// 			setIndex(prev => (prev + 1) % images.length)
// 		}, 4000)
// 		return () => clearInterval(interval)
// 	}, [])

// 	return (
// 		<div className='relative w-full h-screen max-md:h-[90vh] overflow-hidden'>
// 			<AnimatePresence mode='sync'>
// 				<motion.div
// 					key={index}
// 					className='absolute inset-0'
// 					initial={{ opacity: 0 }}
// 					animate={{ opacity: 2 }}
// 					exit={{ opacity: 0 }}
// 					transition={{ duration: 1 }} // faqat almashishda animatsiya
// 				>
// 					{/* ZOOM QATLAMI (CSS) */}
// 					<div className='absolute inset-0 animate-[slow-zoom_4s_linear_forwards]'>
// 						<Image
// 							src={images[index]}
// 							alt='Hero Background'
// 							fill
// 							className='
// 		          object-cover
// 		          object-center
// 		          sm:object-top
// 		          max-md:object-center
// 	          '
// 							priority
// 						/>
// 					</div>

// 					<div className='absolute inset-0 bg-black/60' />
// 				</motion.div>
// 			</AnimatePresence>
// 			<div className='relative z-10 max-w-7xl mx-auto pt-8 flex items-center justify-between'>
// 				<div className='flex flex-col gap-1 leading-none select-none'>
// 					<span className='font-serif font-extrabold text-4xl bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-600 bg-clip-text text-transparent leading-tight scale-y-125'>
// 						Marg&apos;ilon City
// 					</span>

// 					<div className='flex items-center text-center gap-3 '>
// 						<span className='text-[8px]  font-semibold tracking-[0.25em] text-yellow-300/80 uppercase'>
// 							by BESH BOLA BUILDINGS
// 						</span>
// 					</div>
// 				</div>

// 				<div className='flex items-center justify-center gap-4 text-lg text-white scale-y-90 underline'>
// 					<h1>Loyiha haqida</h1>
// 					<h1>Bloklar joylashuvi</h1>
// 					<h1>Xonadonlarni rejalashtirish</h1>
// 					<h1>Kompaniya haqida</h1>
// 					<h1>Bog‘lanish</h1>
// 				</div>
// 				<div>
// 					<Button size={'lg'}>Updated</Button>
// 				</div>
// 			</div>

// 			<div className='relative z-10 max-w-7xl mx-auto h-full flex max-md:px-3 flex-col justify-center gap-4 text-white'>
// 				<span className='bg-orange-600 px-3 py-1 text-sm rounded w-fit'>
// 					BBB GROUP
// 				</span>

// 				<h1 className='text-2xl md:text-5xl font-bold font-lexend leading-tight'>
// 					Oilaviy baxt va xotirjamlik <br />
// 					shu yerdan boshlanadi
// 				</h1>

// 				<p className='md:w-[50%] text-sm text-gray-100 font-lexend'>
// 					Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
// 					dolor sit amet consectetur adipisicing elit. Provident, ea? Cupiditate
// 					earum minima a harum dignissimos!
// 				</p>
// 			</div>
// 		</div>
// 	)
// }

// export default Hero
'use client'

import { Button } from '@/components/ui/button'
import { AnimatePresence, motion } from 'framer-motion'
import { MapPinHouse, Phone } from 'lucide-react'
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

	const [index, setIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex(prev => (prev + 1) % images.length)
		}, 4000)
		return () => clearInterval(interval)
	}, [])

	return (
		<div className='relative h-screen w-full overflow-hidden'>
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
							className='object-cover object-center sm:object-top scale-105'
						/>
					</div>
					<div className='absolute inset-0 bg-black/60' />
				</motion.div>
			</AnimatePresence>

			{/*  NAVBAR  */}
			<header className='absolute top-0 z-20 w-full'>
				<div className='mx-auto max-w-7xl px-6 py-6 flex items-center justify-between'>
					<div className='flex flex-col gap-1 leading-none select-none'>
						<span className='font-serif font-extrabold text-4xl bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-600 bg-clip-text text-transparent leading-tight scale-y-100'>
							Marg&apos;ilon City
						</span>

						<div className='flex items-center text-center gap-3 '>
							<span className='text-[8px]  font-semibold tracking-[0.25em] text-yellow-300/80 uppercase'>
								by BESH BOLA BUILDINGS
							</span>
						</div>
					</div>

					{/* MENU */}
					<nav className='hidden lg:flex items-center gap-8 text-[14px] text-white/85'>
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
					<div className='hidden lg:flex items-center gap-6 text-white'>
						{/* <div className='flex items-center gap-2 text-sm'>
							<Phone size={16} />
							<span className='font-semibold'>78 555 9090</span>
						</div> */}

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
			</header>

			{/* ===== HERO CONTENT ===== */}
			<div className='relative z-10 mx-auto max-w-7xl h-full px-6 pb-16 flex items-center justify-between '>
				<div className='flex flex-col gap-6 text-white self-end'>
					<h1 className='max-w-3xl flex flex-col gap-2 text-3xl md:text-5xl font-bold font-work leading-tight '>
						<span>Qulay va farovon hayot</span>{' '}
						<span>uchun ideal shaharcha</span>
					</h1>

					<p className=' max-w-xl text-sm md:text-lg text-white/85'>
						Marg‘ilon shahrida barpo etilayotgan zamonaviy, xavfsiz va qulay
						turar-joy majmuasi, farovon hayot uchun barcha zarur qulayliklar va
						zamonaviy infrastruktura bilan ta`minlangan. Siz va oilangiz uchun.
					</p>

					<div className=' flex flex-wrap gap-4'>
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
					<a className=''>
						<Image
							src={'/mes/telegram.png'}
							alt='telegram'
							width={50}
							height={50}
						/>
					</a>
					<a href='tel:+998902015858' className=''>
						<Image
							src={'/mes/phone-call.png'}
							alt='telegram'
							width={50}
							height={50}
						/>
					</a>
					{/*  */}
				</div>
			</div>
		</div>
	)
}
