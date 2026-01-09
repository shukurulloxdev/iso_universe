import VimeoComp from '@/components/shared/vimeo-comp'
import Image from 'next/image'

function Aboutus() {
	return (
		<div>
			<div className='max-w-6xl mx-auto py-12'>
				<div className='flex items-center justify-between gap-6 w-full'>
					<div className='w-[70%] border-2 rounded-lg'>
						<VimeoComp videoId={1151790083} autoplay={false} />
					</div>
					<div className='w-[40%]  flex flex-col gap-2'>
						<div className='self-start'>
							<h1 className='text-4xl font-bold font-lexend text-gray-700'>
								Biz haqimizda
							</h1>
							<span className='font-lexend text-sm'>
								<p className='text-orange-600 font-bold py-2 text-lg'>
									«BESH BOLA BUILDING`S»
								</p>{' '}
								Uzoq yillardan beri o`z faoliyatini beton sohasida yuritib
								kelayotgan kompaniya. Endi qurulish sohasida maqsadimiz xalq
								manfaatlarini o`ylagan holda sifatli va hamyonbop xonadonlar
								qurish va o`z egalariga topshirish!
							</span>
						</div>

						<div className='w-full flex items-center h-[210px] bg-orange-100 rounded-lg overflow-hidden'>
							{/* IMAGE */}
							<div className='relative h-full w-[40%] min-w-[160px]'>
								<Image
									src='/after/abdulaziz.webp'
									alt='Abdulaziz Qobulov'
									fill
									className='object-cover'
									sizes='(max-width: 768px) 100vw, 40vw'
								/>
							</div>

							{/* TEXT */}
							<div className='flex flex-col gap-2 p-4 w-[60%]'>
								<h1 className='font-bold text-lg font-lexend text-orange-600'>
									Abdulaziz Qobulov
								</h1>
								<span className='text-sm font-lexend text-gray-700'>
									BBB group – asoschisi, quruvchi va tadbirkor. Sifatli beton va
									zamonaviy binolar quruvchi Farg‘onalik kuchli tadbirkor.
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Aboutus
