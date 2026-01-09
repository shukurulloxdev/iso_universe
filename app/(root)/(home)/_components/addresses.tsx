import Image from 'next/image'

// export default Addresses

function Addresses() {
	return (
		<div>
			<div className='max-w-6xl mx-auto py-14 '>
				<h1 className='text-3xl font-bold font-lexend text-[#4c4e4f]'>
					Bizning sotuv ofisimiz
				</h1>

				<div className='mt-8 rounded-2xl bg-white shadow-2xl border p-4'>
					<div className='relative'>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23074.926317790796!2d71.7832948386351!3d40.396214988392124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb830031beb43d%3A0x30c74f30acfc660f!2sBesh%20Bola%20Building%20sotuv%20ofis!5e0!3m2!1sen!2s!4v1767939920416!5m2!1sen!2s'
							width='100%'
							height='100%'
							className='min-h-[400px]  rounded-2xl '
							loading='lazy'
						/>
						<Image
							src={'/sotuv.png'}
							alt='dsc'
							width={200}
							height={200}
							className='absolute top-0 right-0 rounded-2xl'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Addresses
