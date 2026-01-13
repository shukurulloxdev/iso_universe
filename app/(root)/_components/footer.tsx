// import Logo from '@/components/shared/logo'
// import { Separator } from '@/components/ui/separator'
// import { Dot } from 'lucide-react'
// import Image from 'next/image'
// import Link from 'next/link'

// function Footer() {
// 	return (
// 		<footer className='bg-white border-t border-gray-200 '>
// 			<div className='max-w-6xl mx-auto py-6  '>
// 				<div className='w-full h-full flex items-center flex-col gap-5'>
// 					<div className='flex items-center justify-center'>
// 						<Logo />
// 					</div>
// 					<div className=' flex flex-wrap items-center justify-center gap-3'>
// 						<h1 className='text-gray-700 font-lexend'>Bosh sahifa</h1>
// 						<Dot />
// 						<h1 className='text-gray-700 font-lexend'>Loyhalarimiz</h1>
// 						<Dot />
// 						<h1 className='text-gray-700 font-lexend'>Afzalliklar</h1>
// 						<Dot />
// 						<h1 className='text-gray-700 font-lexend'>Materiallar</h1>
// 						<Dot />
// 						<h1 className='text-gray-700 font-lexend'>Sotuv ofisimiz</h1>
// 					</div>
// 					<div className='flex items-center justify-center gap-3'>
// 						<Link href={' https://t.me/+YxcZinRR7KNhNWFi '}>
// 							<Image
// 								src='/mes/telegram.png'
// 								alt='insta'
// 								width={30}
// 								height={30}
// 							/>
// 						</Link>
// 						<Link href={'https://www.youtube.com/@BeshBolaBuildings'}>
// 							<Image
// 								src='/mes/youtube.png'
// 								alt='insta'
// 								width={30}
// 								height={30}
// 							/>
// 						</Link>
// 						<Link
// 							href={
// 								'https://www.facebook.com/people/Besh-Bola-Buildings/61569978299728/'
// 							}
// 						>
// 							<Image
// 								src='/mes/facebook.png'
// 								alt='insta'
// 								width={30}
// 								height={30}
// 							/>
// 						</Link>
// 						<Link href={'https://www.instagram.com/besh_bola.buildings/?hl=en'}>
// 							<Image src='/mes/social.png' alt='insta' width={30} height={30} />
// 						</Link>
// 					</div>
// 					<Separator />
// 					<div className='w-full flex items-center justify-between'>
// 						<h1>© 2026 «BESH BOLA BUILDING» MChj</h1>
// 						<div>
// 							<h1>beshbolabuildings@gmail.com</h1>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</footer>
// 	)
// }

// export default Footer
'use client'

import Logo from '@/components/shared/logo'
import { Separator } from '@/components/ui/separator'
import { Dot } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
	return (
		<footer className='bg-white border-t border-gray-200'>
			<div className='max-w-7xl mx-auto px-6 py-8 flex flex-col items-center gap-6'>
				{/* Logo */}
				<div className='flex justify-center'>
					<Logo />
				</div>

				{/* Navigation Links */}
				<div className='flex flex-wrap justify-center items-center gap-2 text-gray-700 font-lexend text-sm sm:text-base'>
					<Link href='#' className='hover:text-blue-600 transition-colors'>
						Bosh sahifa
					</Link>
					<Dot className='hidden sm:inline-block' />
					<Link href='#' className='hover:text-blue-600 transition-colors'>
						Loyhalarimiz
					</Link>
					<Dot className='hidden sm:inline-block' />
					<Link href='#' className='hover:text-blue-600 transition-colors'>
						Afzalliklar
					</Link>
					<Dot className='hidden sm:inline-block' />
					<Link href='#' className='hover:text-blue-600 transition-colors'>
						Materiallar
					</Link>
					<Dot className='hidden sm:inline-block' />
					<Link href='#' className='hover:text-blue-600 transition-colors'>
						Sotuv ofisimiz
					</Link>
				</div>

				{/* Social Icons */}
				<div className='flex justify-center items-center gap-4 mt-2'>
					<Link href='https://t.me/+YxcZinRR7KNhNWFi' target='_blank'>
						<Image
							src='/mes/telegram.png'
							alt='Telegram'
							width={30}
							height={30}
							className='hover:scale-110 transition-transform'
						/>
					</Link>
					<Link
						href='https://www.youtube.com/@BeshBolaBuildings'
						target='_blank'
					>
						<Image
							src='/mes/youtube.png'
							alt='YouTube'
							width={30}
							height={30}
							className='hover:scale-110 transition-transform'
						/>
					</Link>
					<Link
						href='https://www.facebook.com/people/Besh-Bola-Buildings/61569978299728/'
						target='_blank'
					>
						<Image
							src='/mes/facebook.png'
							alt='Facebook'
							width={30}
							height={30}
							className='hover:scale-110 transition-transform'
						/>
					</Link>
					<Link
						href='https://www.instagram.com/besh_bola.buildings/?hl=en'
						target='_blank'
					>
						<Image
							src='/mes/social.png'
							alt='Instagram'
							width={30}
							height={30}
							className='hover:scale-110 transition-transform'
						/>
					</Link>
				</div>

				<Separator className='my-4 w-full' />

				{/* Footer Bottom */}
				<div className='flex flex-col sm:flex-row justify-between items-center w-full text-gray-600 text-sm sm:text-base gap-2 sm:gap-0'>
					<p>© 2026 «BESH BOLA BUILDING» MChj</p>
					<p>beshbolabuildings@gmail.com</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
