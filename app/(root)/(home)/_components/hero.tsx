import { Button } from '@/components/ui/button'
import { ChevronsRight } from 'lucide-react'
import Image from 'next/image'

function Hero() {
	return (
		<div className='max-w-5xl mx-auto mt-24 md:mt-28 max-md:px-3'>
			<div className='w-full rounded-3xl overflow-hidden bg-[#eff5ce] relative'>
				{/* <div className='w-full  rounded-3xl overflow-hidden bg-[#E6F57A] relative'> */}

				<div className='absolute -top-24 -right-24 w-80 h-80 rounded-full bg-gray-100/50' />
				<div className='absolute -top-10 -right-10 w-56 h-56 rounded-full bg-gray-300/50' />
				{/* <div className='absolute -top-24 -right-24 w-80 h-80 rounded-full bg-lime-200/50' />
				<div className='absolute -top-10 -right-10 w-56 h-56 rounded-full bg-lime-300/50' /> */}

				<div className='relative z-10 flex items-center justify-between p-4 md:p-8'>
					<div className='space-y-4'>
						<p className='text-sm font-medium text-black/70 font-crete'>
							Classic body builder
						</p>

						<div>
							<h2 className='text-2xl md:text-3xl font-bold text-black'>
								Islom Obidov
							</h2>
							<p className='text-sm text-black/70'>10 yillik tajriba</p>
						</div>
						<Button className='rounded-full flex items-center gap-2'>
							<span>Men haqimda</span>
							<ChevronsRight className='animate-ping' />
						</Button>
					</div>

					{/* Right image */}
					<div>
						<Image
							src='/iso.png'
							alt='Athlete'
							width={180}
							height={240}
							className='object-contain'
							priority
						/>
					</div>
				</div>

				{/* Progress circle */}
				<div className='absolute top-2 right-2 w-9 h-9 rounded-full border-4 border-green-800/20 flex items-center justify-center'>
					<span className='text-[10px] font-semibold text-black'>100%</span>
				</div>
			</div>
		</div>
	)
}

export default Hero
