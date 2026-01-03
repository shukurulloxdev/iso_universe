'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const images = [
	'/imgs/nur.webp',
	'/imgs/hero.png',
	'/imgs/citi.jpg',
	'/imgs/tosh.webp',
	'/imgs/uzbe.jpeg',
]

export default function Hero() {
	const [index, setIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex(prev => (prev + 1) % images.length)
		}, 4000) // 4 sekundda almashadi

		return () => clearInterval(interval)
	}, [])

	return (
		<div className='relative w-full h-[90vh] max-md:h-[65vh] mt-20 overflow-hidden'>
			{/* Background images */}
			<AnimatePresence>
				<motion.div
					key={index}
					className='absolute inset-0'
					initial={{ opacity: 0, scale: 1.09 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.7 }}
				>
					<Image
						src={images[index]}
						alt='Hero Background'
						fill
						className='object-cover'
						priority
					/>
					<div className='absolute inset-0 bg-black/70' />
				</motion.div>
			</AnimatePresence>

			{/* Content */}
			<div className='relative z-10 max-w-6xl mx-auto h-full flex max-md:px-3 flex-col justify-center gap-4 text-white'>
				<span className='bg-orange-600 px-3 py-1 text-sm rounded w-fit'>
					BBB GROUP
				</span>

				<h1 className='text-2xl md:text-5xl font-bold leading-tight'>
					Oilaviy baxt va xotirjamlik <br />
					shu yerdan boshlanadi
				</h1>

				<p className='md:w-[50%] text-sm text-gray-100'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta culpa
					maxime minus quod quos veritatis expedita ducimus atque unde dolore
					at, beatae dolorum Perspiciatis, magni mollitia quia ducimus sunt
					voluptate.
				</p>
			</div>
		</div>
	)
}
