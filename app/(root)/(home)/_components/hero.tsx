import Image from 'next/image'

function Hero() {
	return (
		<div className='max-w-5xl mx-auto mt-24 md:mt-28 max-md:px-3'>
			<div className='w-full  rounded-3xl overflow-hidden bg-[#E6F57A] relative'>
				{/* Background circles */}
				<div className='absolute -top-24 -right-24 w-80 h-80 rounded-full bg-lime-200/50' />
				<div className='absolute -top-10 -right-10 w-56 h-56 rounded-full bg-lime-300/50' />

				{/* Content */}
				<div className='relative z-10 flex items-center justify-between p-6 md:p-8'>
					{/* Left */}
					<div className='space-y-4'>
						<p className='text-sm font-medium text-black/70 font-crete'>
							Progress
						</p>

						<div>
							<h2 className='text-2xl md:text-3xl font-bold text-black'>
								Lower Body
							</h2>
							<p className='text-sm text-black/70'>Cardio · 10 mins</p>
						</div>

						{/* Calories */}
						<div className='flex items-center gap-3 bg-black text-white px-4 py-2 rounded-full w-fit'>
							<span className='text-lg font-semibold'>538</span>
							<span className='text-xs tracking-wide'>CALORIES</span>

							<div className='ml-2 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm'>
								↗
							</div>
						</div>
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
				<div className='absolute top-4 right-4 w-12 h-12 rounded-full border-4 border-black/20 flex items-center justify-center'>
					<span className='text-xs font-semibold text-black'>100%</span>
				</div>
			</div>
		</div>
	)
}

export default Hero
