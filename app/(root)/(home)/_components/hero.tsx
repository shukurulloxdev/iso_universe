'use client'

import VimeoComp from '@/components/shared/vimeo-comp'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import { useVideoStore } from '@/zustand/store/videoStore'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
export default function Hero() {
	const [showSecond, setShowSecond] = useState(false)
	const { isOpen, toggleIsOpen } = useVideoStore()

	const [text] = useTypewriter({
		words: ['Kelajagingizni birga'],
		loop: 1,
		typeSpeed: 80,
	})

	useEffect(() => {
		if (text === 'Kelajagingizni birga') {
			const timer = setTimeout(() => {
				setShowSecond(true)
			}, 400)

			return () => clearTimeout(timer)
		}
	}, [text])

	return (
		<>
			<section className='relative w-full h-[75vh] overflow-hidden mt-20 '>
				{/* Background */}
				<div className='absolute inset-0'>
					<Image
						src='/builders/city.jpg'
						alt='Architecture background'
						fill
						className='object-cover'
						priority
					/>
					<div className='absolute inset-0 bg-white/80' />
				</div>

				<div className='relative z-10 max-w-6xl h-full mx-auto flex items-center justify-between'>
					{/* Left content */}
					<div>
						<h1 className='text-5xl font-bold leading-tight font-lexend text-[#263640]'>
							<span>
								{text}
								{!showSecond && <Cursor cursorStyle='|' />}
							</span>

							<br />

							{showSecond && (
								<motion.span
									className='text-orange-500 inline-block'
									initial={{ y: -40, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ duration: 0.7, ease: 'easeOut' }}
								>
									quramiz
								</motion.span>
							)}
						</h1>

						<p className='mt-6 text-gray-600 w-[70%]'>
							Buildy with over 36 years experiences, the completion of 3k+
							projects and impressive growth.
						</p>

						<div className='mt-8 flex items-center gap-4'>
							<Button
								size='lg'
								className='bg-orange-500 hover:bg-orange-600 transition-all duration-300
								hover:shadow-xl hover:-translate-y-1 	active:translate-y-0.5
								active:scale-[0.97]
								active:shadow-inner'
							>
								Loyihalarimiz
							</Button>

							<Button
								onClick={() => toggleIsOpen()}
								size='lg'
								className='transition-all duration-300
		hover:shadow-xl hover:-translate-y-1 	active:translate-y-0.5
								active:scale-[0.97]
								active:shadow-inner'
							>
								<Play className='h-4 w-4 text-orange-500' />
								<span className='font-medium ml-2'>Biz haqimizda</span>
							</Button>
						</div>
					</div>

					{/* Right image */}
					<div className='self-end max-md:hidden'>
						<Image
							src='/builders/hero-img.png'
							alt='Construction workers'
							width={520}
							height={620}
							className='object-contain'
							priority
						/>
					</div>
				</div>
			</section>
			<Dialog open={isOpen} onOpenChange={toggleIsOpen}>
				<DialogContent className='p-9 max-w-[700px]'>
					<div className='w-full h-full border-2 rounded-lg'>
						<VimeoComp videoId={1151790083} autoplay />
					</div>
					<DialogHeader>
						<DialogTitle className=' text-orange-600 font-bold text-lg font-lexend'>
							«BESH BOLA BUILDING`S»
						</DialogTitle>
						<DialogDescription>
							Bu vidyo orqali bizning zamonaviy kompaniyamiz bilan tanishib
							chiqishingiz mumkun.
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</>
	)
}
