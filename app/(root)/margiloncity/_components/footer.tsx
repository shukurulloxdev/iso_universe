// 'use client'

// import { Card } from '@/components/ui/card'
// import {
// 	Clock,
// 	Facebook,
// 	Instagram,
// 	MapPin,
// 	Phone,
// 	Send,
// 	Youtube,
// } from 'lucide-react'
// import Link from 'next/link'

// export default function Footer() {
// 	return (
// 		//from-slate-50 to-slate-100
// 		<footer className='relative bg-gradient-to-br  from-orange-400 to-orange-500'>
// 			<div className='max-w-7xl mx-auto py-10'>
// 				<div className='grid grid-cols-1 lg:grid-cols-2 gap-14 items-center'>
// 					<Card className='overflow-hidden rounded-3xl shadow-2xl border-none'>
// 						<iframe
// 							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.346926466938!2d71.69893957582771!3d40.423316271438544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb9d000b218581%3A0x9f0d94fe17d7d503!2sMarg%E2%80%98ilon%20shahar%20Yangi%20O&#39;zbekiston%20massivi!5e0!3m2!1sen!2s!4v1768194906168!5m2!1sen!2s'
// 							className='w-full h-[420px]'
// 							loading='lazy'
// 						/>
// 					</Card>

// 					<div className='space-y-10'>
// 						<div className='flex flex-col gap-3'>
// 							<h2 className='text-3xl font-bold tracking-tight'>Bog‘lanish</h2>
// 							<p>
// 								Biz bilan bog‘laning va «Marg`ilon city» - loyhamizdan
// 								o`zingizga mos honadonni chegirmalar bilan harid qiling.
// 							</p>
// 						</div>

// 						<div className='space-y-6'>
// 							<div className='flex items-start gap-4'>
// 								<div className='p-3 shadow-2xl rounded-xl bg-white text-[#064e3b] hover:scale-110 transition'>
// 									<Clock size={20} />
// 								</div>
// 								<div>
// 									<p className='font-bold'>Ish vaqti</p>
// 									<p className=' text-sm'>Har kuni 08:00 – 18:00</p>
// 								</div>
// 							</div>

// 							<div className='flex items-start gap-4'>
// 								<div className='p-3 shadow-2xl rounded-xl bg-white text-[#064e3b] hover:scale-110 transition'>
// 									<MapPin size={20} />
// 								</div>
// 								<div>
// 									<p className='font-bold'>Sotuv bo‘limi</p>
// 									<div className=' flex items-center gap-2 text-sm'>
// 										<p>Farg‘ona shahri</p>
// 										<Link href={'https://maps.app.goo.gl/tq5dGjsNXMsYHPmi6'}>
// 											<p className='text-blue-600 font-semibold underline cursor-pointer'>
// 												Borish
// 											</p>
// 										</Link>
// 									</div>
// 								</div>
// 							</div>

// 							<div className='flex items-center gap-4'>
// 								<div className='p-3 shadow-2xl rounded-xl bg-white text-[#064e3b] hover:scale-110 transition'>
// 									<Phone size={20} />
// 								</div>
// 								<p className='text-2xl font-semibold tracking-wide'>
// 									78 555 9090
// 								</p>
// 							</div>
// 						</div>

// 						{/* Social */}
// 						<div className='flex gap-4'>
// 							{[Instagram, Send, Facebook, Youtube].map((Icon, i) => (
// 								<a
// 									key={i}
// 									href='#'
// 									className='p-3 shadow-2xl rounded-xl bg-white text-[#064e3b] hover:scale-110 transition'
// 								>
// 									<Icon size={20} />
// 								</a>
// 							))}
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</footer>
// 	)
// }

'use client'

import {
	Clock,
	Facebook,
	Instagram,
	MapPin,
	Phone,
	Send,
	Youtube,
} from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
	return (
		<footer className='bg-white text-gray-900 shadow-2xl'>
			<div className='max-w-7xl mx-auto px-4 py-12'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-start'>
					{/* LEFT – INFO */}
					<div className='space-y-8 order-2 lg:order-1'>
						{/* TITLE */}
						<h1 className='md:text-4xl scale-y-95 text-2xl  text-gray-900 font-bold'>
							Bog‘lanish
						</h1>

						{/* TIME */}
						<div className='flex items-start gap-4'>
							<IconBox>
								<Clock size={20} className='text-gray-900' />
							</IconBox>
							<div>
								<p className='font-semibold text-gray-900'>Ish vaqti</p>
								<p className='text-sm text-gray-600'>
									Har kun
									<br />
									soat 09:00 dan 18:00 gacha
								</p>
							</div>
						</div>

						{/* ADDRESS */}
						<div className='flex items-start gap-4'>
							<IconBox>
								<MapPin size={20} className='text-gray-900' />
							</IconBox>
							<div className='space-y-1'>
								<p className='font-semibold text-gray-900'>Sotuv bo‘limi</p>
								<p className='text-sm text-gray-600 leading-relaxed'>
									Farg`ona shahri
									<br />
									Marifat Street
								</p>
							</div>
						</div>
						<div className='flex items-start gap-4'>
							<IconBox>
								<Phone size={20} className='text-gray-900' />
							</IconBox>
							<div className='space-y-1'>
								<p className='font-semibold text-blue-700 underline-offset-8'>
									<a href='tel:+998905559090'>+998 (90) 555 9090</a>
								</p>
								<p className='text-sm text-gray-600 leading-relaxed'>
									beshbolabuildings@gmail.com
								</p>
							</div>
						</div>

						{/* SOCIAL */}
						<div className='flex gap-4 pt-2'>
							{[Instagram, Send, Facebook, Youtube].map((Icon, i) => (
								<Link
									key={i}
									href='#'
									className='w-11 h-11 rounded-xl bg-gray-900 text-white flex items-center justify-center hover:scale-105 transition-transform'
								>
									<Icon size={20} />
								</Link>
							))}
						</div>

						{/* COPYRIGHT */}
						<p className='text-xs text-gray-500 leading-relaxed max-w-xl pt-4'>
							© 2026 BBB Group. Barcha huquqlar himoyalangan. Saytda nashr
							etilgan har qanday material kompaniyaning intellektual mulki
							hisoblanadi. Ushbu sayt ma’lumotlari ommaviy oferta hisoblanmaydi.
						</p>
					</div>

					{/* RIGHT – MAP */}
					<div className='order-1 lg:order-2'>
						<div className='overflow-hidden rounded-2xl shadow-xl'>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.346926466938!2d71.69893957582771!3d40.423316271438544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb9d000b218581%3A0x9f0d94fe17d7d503!2sMarg%E2%80%98ilon%20shahar%20Yangi%20O&#39;zbekiston%20massivi!5e0!3m2!1sen!2s!4v1768194906168!5m2!1sen!2s'
								className='w-full h-[240px] lg:h-[420px]'
								loading='lazy'
							/>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

function IconBox({ children }: { children: React.ReactNode }) {
	return (
		<div className='w-11 h-11  rounded-xl shadow-lg bg-gray-100 flex items-center justify-center shrink-0'>
			{children}
		</div>
	)
}
