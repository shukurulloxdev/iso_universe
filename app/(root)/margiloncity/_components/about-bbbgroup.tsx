import Image from 'next/image'

function AboutBbbGroup() {
	return (
		<div className='max-w-7xl mx-auto py-12'>
			<div className='grid grid-cols-2 gap-10'>
				<div className='relative w-full h-[450px]'>
					<Image src={'/margiloncity/logo/logo.png'} alt='salom' fill />
				</div>
				<div className='flex flex-col gap-4'>
					<span className='font-lexend text-sm'>
						<p className='text-orange-600 font-bold py-2 text-xl'>
							«BESH BOLA BUILDING`S»
						</p>{' '}
						Uzoq yillardan beri o`z faoliyatini beton sohasida yuritib
						kelayotgan kompaniya. Endi qurulish sohasida maqsadimiz xalq
						manfaatlarini o`ylagan holda sifatli va hamyonbop xonadonlar qurish
						va o`z egalariga topshirish!
					</span>
					<div className='flex items-center justify-start'>
						<div className='relative w-[37%] h-[250px]'>
							<Image
								src='/after/abdulaziz.webp'
								alt='Abdulaziz Qobulov'
								fill
								className='object-cover'
							/>
						</div>
						<div className='flex flex-col gap-4 self-start'>
							<p className='text-orange-600 font-bold py-2 text-xl'>
								«BBB GROUP» - Asoschisi
							</p>{' '}
							<h1 className='text-3xl font-semibold '>
								ABDULAZIZ <br /> QOBILOV
							</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutBbbGroup
