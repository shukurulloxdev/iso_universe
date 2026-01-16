'use client'

import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

const contentVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -30 },
}

function Plans() {
	return (
		<div className='max-w-7xl mx-auto max-md:py-4 max-md:px-4'>
			<Tabs defaultValue='hammasi'>
				<div className='flex max-md:flex-col items-center justify-between'>
					<h1 className='md:text-4xl scale-y-95 text-2xl  text-gray-900 font-bold'>
						Xonadonlarning rejalari
						{/* <span className='underline text-xl text-blue-500 font-normal font-work'>
							Batafsil
						</span> */}
					</h1>
					{/* bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-50 */}
					<Separator className='md:hidden' />
					<TabsList className='flex gap-2  py-6 mt-4 rounded-2xl bg-gradient-to-b from-orange-400 via-orange-200 to-orange-400 shadow-2xl border'>
						<TabsTrigger
							value='hammasi'
							className='tabs-trigger-modern text-lg'
						>
							Hammasi
						</TabsTrigger>
						<TabsTrigger
							value='ikkixonali'
							className='tabs-trigger-modern text-lg'
						>
							2-xonali
						</TabsTrigger>
						<TabsTrigger
							value='uchxonali'
							className='tabs-trigger-modern text-lg'
						>
							3-xonali
						</TabsTrigger>
					</TabsList>
				</div>

				<div className='mt-8'>
					{/* HAMMASI */}
					<TabsContent value='hammasi'>
						<AnimatePresence mode='wait'>
							<motion.div
								key='hammasi'
								variants={contentVariants}
								initial='hidden'
								animate='visible'
								exit='exit'
								transition={{ duration: 0.4, ease: 'easeOut' }}
							>
								<div className='grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6'>
									{['1hona2', '1hona', '2hona', '2hona2'].map(img => (
										<div key={img} className='relative w-full h-60 md:h-96'>
											<Image
												src={`/margiloncity/homes/${img}.jpg`}
												alt='home'
												fill
												className='rounded-xl shadow-lg object-cover'
											/>
										</div>
									))}
								</div>
							</motion.div>
						</AnimatePresence>
					</TabsContent>

					{/* 2-XONALI */}
					<TabsContent value='ikkixonali'>
						<AnimatePresence mode='wait'>
							<motion.div
								key='hammasi'
								variants={contentVariants}
								initial='hidden'
								animate='visible'
								exit='exit'
								transition={{ duration: 0.4, ease: 'easeOut' }}
							>
								<div className='grid grid-cols-2 gap-4 md:flex md:items-center md:justify-center md:gap-6'>
									{['1hona2', '1hona'].map(img => (
										<div
											key={img}
											className='relative h-60 w-full md:h-96 md:w-80'
										>
											<Image
												src={`/margiloncity/homes/${img}.jpg`}
												alt='home'
												fill
												className='rounded-xl shadow-lg object-cover'
											/>
										</div>
									))}
								</div>
							</motion.div>
						</AnimatePresence>
					</TabsContent>

					{/* 3-XONALI */}
					<TabsContent value='uchxonali'>
						<AnimatePresence mode='wait'>
							<motion.div
								key='hammasi'
								variants={contentVariants}
								initial='hidden'
								animate='visible'
								exit='exit'
								transition={{ duration: 0.4, ease: 'easeOut' }}
							>
								<div className='grid grid-cols-2 gap-4 md:flex md:items-center md:justify-center md:gap-6'>
									{['2hona3', '2hona2', '3hona2'].map(img => (
										<div
											key={img}
											className='relative w-full h-60 md:h-96 md:w-80'
										>
											<Image
												src={`/margiloncity/homes/${img}.jpg`}
												alt='home'
												fill
												className='rounded-xl shadow-lg object-cover'
											/>
										</div>
									))}
								</div>
							</motion.div>
						</AnimatePresence>
					</TabsContent>
				</div>
			</Tabs>
		</div>
	)
}

export default Plans
