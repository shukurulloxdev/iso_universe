'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const images = [
	'/imgs/nurc.webp',
	'/imgs/hero.png',
	'/imgs/margilonciti.webp',
	'/imgs/citi.jpg',
	'/imgs/tosh.webp',
	'/imgs/komfort.webp',
	'/imgs/uzbe.jpeg',
]

export default function Hero() {
	const [index, setIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex(prev => (prev + 1) % images.length)
		}, 4000) // zoom 4s + fade 2s

		return () => clearInterval(interval)
	}, [])

	return (
		<div className='relative w-full h-[90vh] max-md:h-[65vh] mt-20 overflow-hidden'>
			<AnimatePresence mode='sync'>
				<motion.div
					key={index}
					className='absolute inset-0'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.7 }} // faqat almashishda animatsiya
				>
					{/* ZOOM QATLAMI (CSS) */}
					<div className='absolute inset-0 animate-[slow-zoom_4s_linear_forwards]'>
						<Image
							src={images[index]}
							alt='Hero Background'
							fill
							className='object-cover'
							priority
						/>
					</div>

					<div className='absolute inset-0 bg-black/60' />
				</motion.div>
			</AnimatePresence>

			{/* CONTENT */}
			<div className='relative z-10 max-w-6xl mx-auto h-full flex max-md:px-3 flex-col justify-center gap-4 text-white'>
				<span className='bg-orange-600 px-3 py-1 text-sm rounded w-fit'>
					BBB GROUP
				</span>

				<h1 className='text-2xl md:text-5xl font-bold font-lexend leading-tight'>
					Oilaviy baxt va xotirjamlik <br />
					shu yerdan boshlanadi
				</h1>

				<p className='md:w-[50%] text-sm text-gray-100 font-lexend'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
					dolor sit amet consectetur adipisicing elit. Provident, ea? Cupiditate
					earum minima a harum dignissimos!
				</p>
			</div>
		</div>
	)
}
