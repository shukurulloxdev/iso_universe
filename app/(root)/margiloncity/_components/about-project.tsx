'use client'
import { aboutProject } from '@/lib/constants'
import { motion } from 'framer-motion'
import Image from 'next/image'
export default function LocationCard() {
	return (
		<>
			<section className='max-w-7xl mx-auto md:py-20 py-6  max-md:px-4'>
				<div className='grid grid-cols-2 md:gap-20 gap-8 items-center max-lg:grid-cols-1'>
					<motion.div
						className='relative order-2 lg:order-1'
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 1, ease: 'easeOut' }}
					>
						<div className='relative'>
							{/* IMAGE */}
							<div className='relative w-full aspect-[4/3] overflow-hidden rounded-t-3xl '>
								<Image
									src='/margiloncity/img1.webp'
									alt='Margilon city'
									fill
									priority
									className='object-cover'
								/>
							</div>

							{/* CONTENT CARD */}
							<div
								className='
        relative
        -mt-4
        bg-orange-500
        p-5
				rounded-br-[100px]
				
        rounded-3xl
        shadow-xl

        md:absolute
        md:-bottom-10
        md:left-0
        md:mx-0
        md:w-[90%]
        md:rounded-t-3xl
        md:rounded-bl-3xl
        md:rounded-br-[100px]
      '
							>
								<p className='text-[13px] md:text-sm leading-relaxed font-work text-white'>
									Majmua rivojlangan infratuzilmaga ega. Avtomobillar uchun keng
									avtoturargohlar, zamonaviy liftlar va xavfsizlik tizimlari.
								</p>

								<button className='mt-2 text-white font-semibold underline underline-offset-1 hover:opacity-80 transition'>
									Xaritada ko‘rish
								</button>
							</div>
						</div>
					</motion.div>
					{/*  */}
					<div className='flex flex-col items-start gap-3 self-start order-1 lg:order-2'>
						<motion.div
							className='flex flex-col items-start gap-4 self-start'
							initial={{ opacity: 0, x: 100 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, amount: 0.5 }}
							transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
						>
							<h1 className='md:text-4xl scale-y-95 text-2xl  text-gray-900 font-bold'>
								Margilon city haqida
							</h1>

							<div className='flex flex-col gap-3 text-sm'>
								<p className='text-gray-600'>
									Margilon city — shahar markazida joylashgan, zamonaviy
									arxitektura va qulay yashash sharoitlari bilan ajralib
									turadigan turar-joy majmuasi. Loyihaning har bir jabhasi
									hayotingizni yanada farovon va qulay qilish uchun
									moʻljallangan.
								</p>
								<p className='text-gray-600'>
									Majmua atrofida tabiat bilan uygʻun yashashni taʼminlovchi
									yashil hududlar va ochiq maydonlar mavjud. Bu joylarda siz va
									oilangiz uchun dam olish, bolalar uchun esa xavfsiz oʻyin
									maydonchalari taqdim etiadi.
								</p>
							</div>
						</motion.div>

						<motion.div
							className='grid grid-cols-2 gap-7 md:mt-8 mt-5'
							initial={{ opacity: 0, x: 100 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, amount: 0.5 }}
							transition={{ duration: 1, ease: 'easeOut', delay: 0.7 }}
						>
							{aboutProject.map(item => (
								<div className='flex items-center gap-4' key={item.image}>
									<div className='relative md:w-14 md:h-14 h-12 w-14'>
										<Image src={item.image} alt='lats' fill />
									</div>
									<h1 className='md:max-w-[150px] text-sm md:text-xl font-roboto font-bold text-gray-800 tracking-wider'>
										{item.title}
									</h1>
								</div>
							))}
						</motion.div>
					</div>
					{/*  */}
				</div>
				<div className='grid md:grid-cols-2 gap-4 md:gap-10 md:mt-20 mt-5'>
					{/* CONTENT BLOCK - mobile birinchi, desktop chap */}
					<div className='flex flex-col gap-3 order-1 md:order-1'>
						<motion.div
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, amount: 0.5 }}
							transition={{ duration: 1, ease: 'easeOut' }}
						>
							<h1 className='text-4xl max-md:hidden text-gray-900 leading-relaxed font-bold'>
								Qulay joylashuv
							</h1>
						</motion.div>

						<div className='flex flex-col gap-4'>
							<motion.div
								className='flex flex-col gap-6'
								initial={{ opacity: 0, x: -100 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, amount: 0.7 }}
								transition={{ duration: 1, ease: 'easeOut' }}
							>
								<div className='flex flex-col gap-3 text-sm '>
									<p className='text-gray-600'>
										Urgut shahrida qad ko`tarilayotgan Nurafshon majmuasi — bu
										sizning orzularingizdagi ideal maskan. Ushbu zamonaviy
										majmua nafaqat estetik jihatdan chiroyli, balki turli
										qulayliklarga ega.
									</p>
									<p className='text-gray-600'>
										Bu majmua yashash uchun ideal joy, shu bilan birga sizning
										hayotingizni qulay va farovon qilish uchun mo‘ljallangan
										ko‘plab boshqa funksiyalarni ham o‘z ichiga oladi. Sizning
										farovon hayotingiz uchun barcha sharoitlar yaratilgan!
									</p>
								</div>

								<div className=' w-full md:w-[90%] text-[13px] md:text-sm border bg-orange-500 text-white p-6 rounded-t-3xl rounded-br-3xl shadow-2xl rounded-tl-[60px]'>
									<p className='leading-relaxed font-work border-l-4 pl-2'>
										Central Avenue — Rivojlangan shahar infratuzilmasi
										qulayliklari va toza havoni bir yerda jamlagan turar-joy
										majmuasi.
									</p>
								</div>
							</motion.div>
						</div>
					</div>

					{/* IMAGE BLOCK - mobile keyin, desktop o‘ng */}
					<motion.div
						className='order-2 md:order-2'
						initial={{ opacity: 0, x: 100 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 1, ease: 'easeOut' }}
					>
						<div className='relative w-full h-64 md:h-full overflow-hidden rounded-xl'>
							<Image
								src='/margiloncity/img2.webp'
								alt='Nurafshon'
								fill
								priority
								className='object-cover'
							/>
						</div>
					</motion.div>
				</div>

				{/* 3 */}
				<div className='grid grid-cols-2 gap-20 items-center md:mt-20 mt-6 max-lg:grid-cols-1'>
					<motion.div
						className='relative self-start order-2 lg:order-1'
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 1, ease: 'easeOut' }}
					>
						<div className='relative  self-start'>
							<div className='relative w-full aspect-[4/3] overflow-hidden rounded-xl'>
								<Image
									src='/margiloncity/img9.jpg'
									alt='Nurafshon'
									fill
									priority
									className='object-cover rounded-tr-[200px] '
								/>
							</div>

							<div className='absolute -bottom-10 left-10 right-10 text-center bg-gradient-to-b border from-yellow-50 via-yellow-100 to-yellow-50 text-black p-6 rounded-3xl  shadow-2xl '>
								<p className='text-base leading-relaxed font-work '>
									<span className='font-semibold text-xl'>Margilon city</span> –
									anʼanaviy va zamonaviy arxitektura usullaridan foydalangan
									holda barpo etilayotgan sanʼat .
								</p>
							</div>
						</div>
					</motion.div>
					{/*  */}

					<div className='flex flex-col items-start gap-3 self-start order-1 lg:order-2'>
						<motion.div
							className='flex flex-col items-start gap-3 self-start'
							initial={{ opacity: 0, x: 100 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, amount: 0.5 }}
							transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
						>
							<h1 className='md:text-4xl text-2xl text-gray-900 leading-relaxed font-bold'>
								Majmua arxitekturasi
							</h1>

							<div className='flex flex-col gap-3 text-sm'>
								<p className='text-gray-600'>
									Turar-joy majmuasi togʻ bagʻridagi musaffo havoga boy maskanda
									qurilmoqda. Hovliga begonalar kirishi qatʼiyan taqiqlanadi.
								</p>
								<p className='text-gray-600'>
									Hududda avtoturargoh, bolalar maydonchasi, hayvonot bogʻi va
									akvapark mohirlik bilan joylashtiriladi. Bu esa qulay hayot
									tarzini kafolatlaydi.
								</p>
							</div>
						</motion.div>

						<motion.div
							className='w-full grid md:grid-cols-3 gap-6 md:mt-16 mt-6'
							initial={{ opacity: 0, x: 100 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, amount: 0.5 }}
							transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
						>
							<div className='flex md:flex-col gap-3'>
								<div className='relative md:w-24 md:h-24 w-16 h-16'>
									<Image
										src='/margiloncity/icons/architectural.png'
										alt='lats'
										fill
									/>
								</div>
								<h1 className='md:max-w-[150px] self-center text-xl font-roboto font-bold text-gray-800 tracking-wider'>
									Qulay rejalashtirish
								</h1>
							</div>
							<div className='flex md:flex-col gap-3'>
								<div className='relative md:w-24 md:h-24 w-16 h-16'>
									<Image
										// src='/margiloncity/icons/balcony.png'
										src='/margiloncity/icons/balcony.png'
										alt='lats'
										fill
									/>
								</div>
								<h1 className='md:max-w-[150px] self-center text-xl font-roboto font-bold text-gray-800 tracking-wider'>
									Qulay balkonlar
								</h1>
							</div>
							<div className='flex md:flex-col gap-3'>
								<div className='relative md:w-24 md:h-24 w-16 h-16'>
									<Image
										src='/margiloncity/icons/material.png'
										alt='lats'
										fill
									/>
								</div>
								<h1 className='md:max-w-[150px] self-center text-xl font-roboto font-bold text-gray-800 tracking-wider'>
									Yevropa fasad materiallari
								</h1>
							</div>
						</motion.div>
					</div>
					{/*  */}
				</div>
			</section>
		</>
	)
}
