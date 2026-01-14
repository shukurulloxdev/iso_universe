'use client'
import { aboutProject } from '@/lib/constants'
import { motion } from 'framer-motion'
import Image from 'next/image'
export default function LocationCard() {
	return (
		<>
			<section className='max-w-7xl mx-auto md:py-20 py-8 '>
				<div className='grid grid-cols-2 gap-20 items-center max-lg:grid-cols-1 max-md:px-4'>
					<motion.div
						className='relative self-start  order-2 lg:order-1'
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 1, ease: 'easeOut' }}
					>
						<div className='relative  self-start'>
							<div className='relative w-full aspect-[4/3] overflow-hidden rounded-xl'>
								<Image
									src='/margiloncity/img1.webp'
									alt='Nurafshon'
									fill
									priority
									className='object-cover rounded-tl-[200px] rounded-br-[200px]'
								/>
							</div>

							<div className='absolute -bottom-10 left-0 w-[90%] bg-gradient-to-b border from-yellow-50 via-yellow-100 to-yellow-50 text-black p-6 rounded-t-3xl rounded-bl-3xl shadow-2xl rounded-br-[100px]'>
								<p className='text-base leading-relaxed font-work'>
									<span className='font-semibold text-xl'>Margilon city</span> –
									Margilon shahrining markazida joylashgan bo‘lib, qulay
									joylashuv va rivojlangan infratuzilma bilan Lorem ipsum dolor
									sit amet. ta’minlangan.
								</p>

								<button className='mt-2 font-semibold underline underline-offset-4 hover:opacity-80 transition'>
									Xaritada ko‘rish
								</button>
							</div>
						</div>
					</motion.div>
					{/*  */}

					<div className='flex flex-col items-start gap-3 self-start order-1 lg:order-2 '>
						<motion.div
							className='flex flex-col items-start gap-3 self-start'
							initial={{ opacity: 0, x: 100 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, amount: 0.5 }}
							transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
						>
							<h1 className='md:text-4xl  text-[30px]  text-gray-800 leading-relaxed font-bold'>
								Margilon city haqida
							</h1>

							<div className='flex flex-col gap-4 text-sm font-work'>
								<p className='text-gray-700'>
									Margilon city — shahar markazida joylashgan, zamonaviy
									arxitektura va qulay yashash sharoitlari bilan ajralib
									turadigan turar-joy majmuasi. Loyihaning har bir jabhasi
									hayotingizni yanada farovon va qulay qilish uchun
									moʻljallangan.
								</p>
								<p className='text-gray-700'>
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
								<div
									className='flex items-center md:gap-4 gap-2'
									key={item.image}
								>
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
				{/*  */}
				<div className='grid md:grid-cols-2 gap-10 mt-20 '>
					<div className='flex flex-col gap-3'>
						<motion.div
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, amount: 0.5 }}
							transition={{ duration: 1, ease: 'easeOut' }}
						>
							<h1 className='text-4xl text-gray-900 leading-relaxed font-bold'>
								Qulay joylashuv
							</h1>
						</motion.div>

						<div className='flex flex-col gap-4'>
							<motion.div
								className='flex flex-col gap-4'
								initial={{ opacity: 0, x: -100 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, amount: 0.7 }}
								transition={{ duration: 1, ease: 'easeOut' }}
							>
								<p className='text-gray-700'>
									Urgut shahrida qad ko`tarilayotgan Nurafshon majmuasi — bu
									sizning orzularingizdagi ideal maskan. Ushbu zamonaviy majmua
									nafaqat estetik jihatdan chiroyli, balki turli qulayliklarga
									ega.
								</p>
								<p className='text-gray-700'>
									Bu majmua yashash uchun ideal joy, shu bilan birga sizning
									hayotingizni qulay va farovon qilish uchun mo‘ljallangan
									ko‘plab boshqa funksiyalarni ham o‘z ichiga oladi. Sizning
									farovon hayotingiz uchun barcha sharoitlar yaratilgan!
								</p>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, x: -100 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, amount: 0.9 }}
								transition={{ duration: 1, ease: 'easeOut' }}
							>
								<div className='w-[90%] border bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-50 text-black p-6 rounded-t-3xl rounded-br-3xl  shadow-2xl '>
									<p className='text-base leading-relaxed font-work'>
										Central Avenue — Rivojlangan shahar infratuzilmasi
										qulayliklari va toza havoni bir yerda jamlagan turar-joy
										majmuasi.
									</p>
								</div>
							</motion.div>
						</div>
					</div>
					<motion.div
						initial={{ opacity: 0, x: 100 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 1, ease: 'easeOut' }}
					>
						<div className='relative w-full h-full overflow-hidden rounded-xl'>
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
				<div className='grid grid-cols-2 gap-20 items-center mt-20 max-lg:grid-cols-1'>
					<motion.div
						className='relative self-start'
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

					<div className='flex flex-col items-start gap-3 self-start '>
						<motion.div
							className='flex flex-col items-start gap-3 self-start'
							initial={{ opacity: 0, x: 100 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, amount: 0.5 }}
							transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
						>
							<h1 className='text-4xl text-gray-900 leading-relaxed font-bold'>
								Majmua arxitekturasi
							</h1>

							<div className='flex flex-col gap-4'>
								<p className='text-gray-700'>
									Turar-joy majmuasi togʻ bagʻridagi musaffo havoga boy maskanda
									qurilmoqda. Hovliga begonalar kirishi qatʼiyan taqiqlanadi.
								</p>
								<p className='text-gray-700'>
									Hududda avtoturargoh, bolalar maydonchasi, hayvonot bogʻi va
									akvapark mohirlik bilan joylashtiriladi. Bu esa qulay hayot
									tarzini kafolatlaydi.
								</p>
							</div>
						</motion.div>

						<motion.div
							className='w-full grid grid-cols-3  mt-16'
							initial={{ opacity: 0, x: 100 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, amount: 0.5 }}
							transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
						>
							<div className='flex flex-col gap-3'>
								<Image
									src='/margiloncity/icons/architectural.png'
									alt='lats'
									width={80}
									height={80}
								/>
								<h1 className='md:max-w-[150px] text-xl font-roboto font-bold text-gray-800 tracking-wider'>
									Qulay rejalashtirish
								</h1>
							</div>
							<div className='flex flex-col gap-3'>
								<Image
									// src='/margiloncity/icons/balcony.png'
									src='/margiloncity/icons/balcony.png'
									alt='lats'
									width={80}
									height={80}
								/>
								<h1 className='md:max-w-[150px] text-xl font-roboto font-bold text-gray-800 tracking-wider'>
									Qulay balkonlar
								</h1>
							</div>
							<div className='flex flex-col gap-3'>
								<Image
									src='/margiloncity/icons/material.png'
									alt='lats'
									width={80}
									height={80}
								/>
								<h1 className='md:max-w-[150px] text-xl font-roboto font-bold text-gray-800 tracking-wider'>
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
