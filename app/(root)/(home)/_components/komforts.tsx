'use client'

import { Card } from '@/components/ui/card'
import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel'
import { komforts } from '@/lib/constants'
import Autoplay from 'embla-carousel-autoplay'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
export default function Komforts() {
	const [api, setApi] = useState<CarouselApi>()
	const [active, setActive] = useState(0)

	useEffect(() => {
		if (!api) return

		setActive(api.selectedScrollSnap())

		api.on('select', () => {
			setActive(api.selectedScrollSnap())
		})
	}, [api])

	return (
		<section
			className='max-w-6xl mx-auto max-md:pt-6 md:my-14'
			id='qulayliklar'
		>
			<h1 className='max-md:hidden text-3xl font-bold leading-tight font-lexend text-[#4c4e4f]'>
				Afzalliklar
			</h1>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-3'>
				{/* TEXT */}
				<motion.div
					key={active}
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: 'easeOut' }}
				>
					<div className='space-y-5'>
						<h2 className='md:text-3xl text-2xl font-semibold text-orange-600'>
							{komforts[active].title}
						</h2>
						<p className='text-gray-700 leading-relaxed md:text-[15px] text-sm font-work line-clamp-5'>
							{komforts[active].description}
						</p>
					</div>
				</motion.div>

				{/* SLIDER */}
				<Carousel
					setApi={setApi}
					opts={{ align: 'start', loop: true }}
					className='w-full'
					plugins={[
						Autoplay({
							delay: 2000,
						}),
					]}
				>
					<CarouselContent>
						{komforts.map((item, index) => (
							<CarouselItem key={index} className='sm:basis-1/2  md:basis-4/5'>
								<Card
									className={`overflow-hidden rounded-2xl transition-all duration-300 ${
										active === index ? 'shadow-lg' : 'opacity-70'
									}`}
								>
									<Image
										src={item.image}
										alt={item.title}
										width={600}
										height={500}
										className='object-cover w-full h-[280px]'
									/>
								</Card>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
			<div className='flex justify-center gap-2 py-6'>
				{komforts.map((_, i) => (
					<span
						key={i}
						className={`h-2 w-2 rounded-full transition-all duration-300 ${
							active === i ? 'bg-orange-500 w-6' : 'bg-gray-300'
						}`}
					/>
				))}
			</div>
		</section>
	)
}

// //
// //
// ///
// //
// //
// //
// //
// //

// // <div className='bg-slate-50  w-full overflow-hidden'>
// // 	<div className='w-full flex flex-col gap-4 py-12 '>
// // 		<div className='w-full'>
// // 			<Carousel
// // 				opts={{ align: 'start', loop: true }}
// // 				plugins={[
// // 					Autoplay({
// // 						delay: 2000,
// // 						stopOnInteraction: false,
// // 					}),
// // 				]}
// // 				className='w-full'
// // 			>
// // 				<CarouselContent>
// // 					{reviewsTop.map(product => (
// // 						<CarouselItem
// // 							key={product.id}
// // 							className='basis-1/3  max-md:basis-1/4'
// // 						>
// // 							<ReviewCard {...product} />
// // 						</CarouselItem>
// // 					))}
// // 				</CarouselContent>
// // 				<CarouselPrevious />
// // 				<CarouselNext />
// // 			</Carousel>
// // 		</div>
// // 		<div>s</div>
// // 	</div>
// // </div>
