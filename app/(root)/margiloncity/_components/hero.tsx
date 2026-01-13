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
		<div className='relative h-screen w-full max-md:h-[85vh] overflow-hidden'>
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
					<div className='absolute inset-0 bg-black/60' />
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
			<div className='max-md:hidden relative z-10 mx-auto max-w-7xl h-full px-4 pb-16 flex items-center justify-between '>
				<div className='flex flex-col gap-6 text-white self-end'>
					<h1 className='max-w-3xl flex flex-col gap-2 text-3xl md:text-5xl font-bold font-work leading-tight '>
						<span>Qulay va farovon hayot</span>{' '}
						<span>uchun ideal shaharcha</span>
					</h1>

					<p className='max-w-xl text-sm md:text-lg text-white/85'>
						Marg‘ilon shahrida barpo etilayotgan zamonaviy, xavfsiz va qulay
						turar-joy majmuasi, farovon hayot uchun barcha zarur qulayliklar va
						zamonaviy infrastruktura bilan ta`minlangan. Siz va oilangiz uchun.
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
				</div>
			</div>
			{/* HERO CONTENT */}
			<div className='lg:hidden absolute left-0 right-0 bottom-40 z-20 px-4 text-white'>
				<h1 className='text-[26px] font-bold leading-tight max-w-[360px]'>
					Butun oila uchun <br />
					mukammal <br />
					qulayliklarga ega <br />
					xonadonlar
				</h1>

				<p className='mt-4 text-sm leading-relaxed max-w-[360px] text-white/90'>
					Crystal Avenue – TXT Group kompaniyasi tomonidan Farg‘ona shahrida
					barpo etilayotgan ko‘p qavatli, komfort toifadagi turar-joy majmuasi.
				</p>
			</div>

			{/* CTA BUTTON */}
			<div className='absolute left-0 right-0 bottom-20 z-20 px-6'>
				<button className='w-full rounded-full bg-green-700 py-4 text-base font-semibold text-white shadow-md active:scale-[0.98] transition'>
					Rejalashtirishni tanlash
				</button>
			</div>

			{/* FLOATING LIVE + PHONE */}
			<div className='absolute right-4 bottom-44 z-30 flex flex-col items-center gap-3'>
				{/* LIVE */}
				<div className='bg-green-700 text-white text-xs px-4 py-1 rounded-full'>
					Live
				</div>

				{/* PHONE */}
				<a
					href='tel:1361'
					className='w-12 h-12 rounded-full bg-green-700 flex items-center justify-center shadow-lg active:scale-95 transition'
				>
					<Phone size={20} className='text-white' />
				</a>
			</div>
		</div>
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
