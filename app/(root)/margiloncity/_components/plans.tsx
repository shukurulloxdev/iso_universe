// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
// import Image from 'next/image'

// function Plans() {
// 	return (
// 		<div className='max-w-7xl mx-auto py-12'>
// 			<Tabs defaultValue='hammasi'>
// 				<div className='flex items-center justify-between'>
// 					<h1 className='text-4xl font-semibold font-lexend'>
// 						Xonadonlarning o‘ylangan rejalari
// 					</h1>

// 					<TabsList className='bg-gradient-to-b border from-yellow-50 via-yellow-100 to-yellow-50 text-black px-6 py-8 rounded-3xl  shadow-2xl flex items-center gap-4 '>
// 						<TabsTrigger
// 							value='hammasi'
// 							className='text-lg
//               px-4 py-2
//               rounded-2xl text-black
// 							shadow-md
//               hover:-translate-y-0.5 hover:shadow-lg
//               data-[state=active]:bg-orange-200
//               data-[state=active]:text-black
//               data-[state=active]:font-semibold
//               data-[state=active]:scale-105
//               data-[state=active]:shadow-xl
//               /* animatsiya */
//               transform
//               transition-all
//               duration-300
//               ease-[cubic-bezier(.4,2,.6,1)]'
// 						>
// 							Hammasi
// 						</TabsTrigger>
// 						<TabsTrigger
// 							value='ikkixonali'
// 							className='text-lg
//               px-4 py-2
//               rounded-2xl text-black
// 							shadow-md
//               hover:-translate-y-0.5 hover:shadow-lg
//               data-[state=active]:bg-orange-200
//               data-[state=active]:text-black
//               data-[state=active]:font-semibold
//               data-[state=active]:scale-105
//               data-[state=active]:shadow-xl
//               /* animatsiya */
//               transform
//               transition-all
//               duration-300
//               ease-[cubic-bezier(.4,2,.6,1)]'
// 						>
// 							2-xonali
// 						</TabsTrigger>
// 						<TabsTrigger
// 							value='uchxonali'
// 							className='text-lg
//               px-4 py-2
//               rounded-2xl text-black
// 							shadow-md
//               hover:-translate-y-0.5 hover:shadow-lg
//               data-[state=active]:bg-orange-200
//               data-[state=active]:text-black
//               data-[state=active]:font-semibold
//               data-[state=active]:scale-105
//               data-[state=active]:shadow-xl
//               /* animatsiya */
//               transform
//               transition-all
//               duration-300
//               ease-[cubic-bezier(.4,2,.6,1)]'
// 						>
// 							3-xonali
// 						</TabsTrigger>
// 					</TabsList>
// 				</div>

// 				<div className='mt-10'>
// 					<TabsContent value='hammasi'>
// 						<div className='grid grid-cols-4 gap-6'>
// 							<div className='relative w-full h-96'>
// 								<Image
// 									src={'/margiloncity/homes/1hona2.jpg'}
// 									alt='d2qwx'
// 									className='rounded-xl shadow-lg'
// 									fill
// 								/>
// 							</div>
// 							<div className='relative w-full h-96'>
// 								<Image
// 									src={'/margiloncity/homes/1hona.jpg'}
// 									alt='d2qwx'
// 									fill
// 									className='rounded-xl shadow-lg'
// 								/>
// 							</div>
// 							<div className='relative w-full h-96'>
// 								<Image
// 									src={'/margiloncity/homes/2hona.jpg'}
// 									alt='d2qwx'
// 									fill
// 									className='rounded-xl shadow-lg'
// 								/>
// 							</div>
// 							<div className='relative w-full h-96'>
// 								<Image
// 									src={'/margiloncity/homes/2hona2.jpg'}
// 									alt='d2qwx'
// 									className='rounded-xl shadow-lg'
// 									fill
// 								/>
// 							</div>
// 						</div>
// 					</TabsContent>

// 					<TabsContent value='ikkixonali'>
// 						<div className='flex items-center justify-center gap-6'>
// 							<div className='relative h-96 w-80'>
// 								<Image
// 									src={'/margiloncity/homes/1hona2.jpg'}
// 									alt='d2qwx'
// 									className='rounded-xl shadow-lg'
// 									fill
// 								/>
// 							</div>
// 							<div className='relative  h-96 w-80'>
// 								<Image
// 									src={'/margiloncity/homes/1hona.jpg'}
// 									alt='d2qwx'
// 									fill
// 									className='rounded-xl shadow-lg'
// 								/>
// 							</div>
// 						</div>
// 					</TabsContent>
// 					<TabsContent value='uchxonali'>
// 						<div className='flex items-center justify-center gap-6'>
// 							<div className='relative h-96 w-80'>
// 								<Image
// 									src={'/margiloncity/homes/2hona3.jpg'}
// 									alt='d2qwx'
// 									className='rounded-xl shadow-lg'
// 									fill
// 								/>
// 							</div>
// 							<div className='relative  h-96 w-80'>
// 								<Image
// 									src={'/margiloncity/homes/2hona2.jpg'}
// 									alt='d2qwx'
// 									className='rounded-xl shadow-lg'
// 									fill
// 								/>
// 							</div>
// 							<div className='relative  h-96 w-80'>
// 								<Image
// 									src={'/margiloncity/homes/3hona2.jpg'}
// 									alt='d2qwx'
// 									className='rounded-xl shadow-lg'
// 									fill
// 								/>
// 							</div>
// 						</div>
// 					</TabsContent>
// 				</div>
// 			</Tabs>
// 		</div>
// 	)
// }

// export default Plans
'use client'

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
		<div className='max-w-7xl mx-auto py-12'>
			<Tabs defaultValue='hammasi'>
				<div className='flex max-md:flex-col items-center justify-between'>
					<h1 className='text-4xl font-semibold font-lexend'>
						Xonadonlarning o‘ylangan rejalari
					</h1>
					<TabsList className='flex gap-2   py-6 rounded-2xl bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-50 shadow-xl border'>
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

				<div className='mt-10'>
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
								<div className='grid grid-cols-4 gap-6'>
									{['1hona2', '1hona', '2hona', '2hona2'].map(img => (
										<div key={img} className='relative w-full h-96'>
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
								<div className='flex items-center justify-center gap-6'>
									{['1hona2', '1hona'].map(img => (
										<div key={img} className='relative h-96 w-80'>
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
								<div className='flex items-center justify-center gap-6'>
									{['2hona3', '2hona2', '3hona2'].map(img => (
										<div key={img} className='relative h-96 w-80'>
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
