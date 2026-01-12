'use client'

import { Card } from '@/components/ui/card'
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
		<footer className='relative bg-gradient-to-br from-slate-50 to-slate-100 '>
			<div className='max-w-7xl mx-auto py-10'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-14 items-center'>
					<Card className='overflow-hidden rounded-3xl shadow-2xl border-none'>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.346926466938!2d71.69893957582771!3d40.423316271438544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb9d000b218581%3A0x9f0d94fe17d7d503!2sMarg%E2%80%98ilon%20shahar%20Yangi%20O&#39;zbekiston%20massivi!5e0!3m2!1sen!2s!4v1768194906168!5m2!1sen!2s'
							className='w-full h-[420px]'
							loading='lazy'
						/>
					</Card>

					<div className='space-y-10'>
						<div className='flex flex-col gap-3'>
							<h2 className='text-3xl font-bold tracking-tight'>Bog‘lanish</h2>
							<p>
								Biz bilan bog‘laning va «Marg`ilon city» - loyhamizdan
								o`zingizga mos honadonni chegirmalar bilan harid qiling.
							</p>
						</div>

						<div className='space-y-6'>
							<div className='flex items-start gap-4'>
								<div className='p-3 shadow-2xl rounded-xl bg-white text-[#064e3b] hover:scale-110 transition'>
									<Clock size={20} />
								</div>
								<div>
									<p className='font-bold'>Ish vaqti</p>
									<p className=' text-sm'>Har kuni 08:00 – 18:00</p>
								</div>
							</div>

							<div className='flex items-start gap-4'>
								<div className='p-3 shadow-2xl rounded-xl bg-white text-[#064e3b] hover:scale-110 transition'>
									<MapPin size={20} />
								</div>
								<div>
									<p className='font-bold'>Sotuv bo‘limi</p>
									<div className=' flex items-center gap-2 text-sm'>
										<p>Farg‘ona shahri</p>
										<Link href={'https://maps.app.goo.gl/tq5dGjsNXMsYHPmi6'}>
											<p className='text-blue-600 font-semibold underline cursor-pointer'>
												Borish
											</p>
										</Link>
									</div>
								</div>
							</div>

							<div className='flex items-center gap-4'>
								<div className='p-3 shadow-2xl rounded-xl bg-white text-[#064e3b] hover:scale-110 transition'>
									<Phone size={20} />
								</div>
								<p className='text-2xl font-semibold tracking-wide'>
									78 555 9090
								</p>
							</div>
						</div>

						{/* Social */}
						<div className='flex gap-4'>
							{[Instagram, Send, Facebook, Youtube].map((Icon, i) => (
								<a
									key={i}
									href='#'
									className='p-3 shadow-2xl rounded-xl bg-white text-[#064e3b] hover:scale-110 transition'
								>
									<Icon size={20} />
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
