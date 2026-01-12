import Logo from '@/components/shared/logo'
import { Separator } from '@/components/ui/separator'
import { Dot } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
	return (
		<footer className='bg-white border-t border-gray-200 '>
			<div className='max-w-6xl mx-auto py-6  '>
				<div className='w-full h-full flex items-center flex-col gap-5'>
					<div className='flex items-center justify-center'>
						<Logo />
					</div>
					<div className=' flex flex-wrap items-center justify-center gap-3'>
						<h1 className='text-gray-700 font-lexend'>Bosh sahifa</h1>
						<Dot />
						<h1 className='text-gray-700 font-lexend'>Loyhalarimiz</h1>
						<Dot />
						<h1 className='text-gray-700 font-lexend'>Afzalliklar</h1>
						<Dot />
						<h1 className='text-gray-700 font-lexend'>Materiallar</h1>
						<Dot />
						<h1 className='text-gray-700 font-lexend'>Sotuv ofisimiz</h1>
					</div>
					<div className='flex items-center justify-center gap-3'>
						<Link href={' https://t.me/+YxcZinRR7KNhNWFi '}>
							<Image
								src='/mes/telegram.png'
								alt='insta'
								width={30}
								height={30}
							/>
						</Link>
						<Link href={'https://www.youtube.com/@BeshBolaBuildings'}>
							<Image
								src='/mes/youtube.png'
								alt='insta'
								width={30}
								height={30}
							/>
						</Link>
						<Link
							href={
								'https://www.facebook.com/people/Besh-Bola-Buildings/61569978299728/'
							}
						>
							<Image
								src='/mes/facebook.png'
								alt='insta'
								width={30}
								height={30}
							/>
						</Link>
						<Link href={'https://www.instagram.com/besh_bola.buildings/?hl=en'}>
							<Image src='/mes/social.png' alt='insta' width={30} height={30} />
						</Link>
					</div>
					<Separator />
					<div className='w-full flex items-center justify-between'>
						<h1>© 2026 «BESH BOLA BUILDING» MChj</h1>
						<div>
							<h1>beshbolabuildings@gmail.com</h1>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
