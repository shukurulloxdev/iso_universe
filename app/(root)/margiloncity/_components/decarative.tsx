import Image from 'next/image'

function Decarative() {
	return (
		<div className='relative  w-full h-[500px]'>
			<Image
				src={'/margiloncity/homes/decaration.png'}
				alt='salom'
				fill
				className='object-cover'
			/>
		</div>
	)
}

export default Decarative
