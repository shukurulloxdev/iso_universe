import Image from 'next/image'

function Decarative({ img }: { img: string }) {
	return (
		<div className='relative w-full md:h-[500px] h-[400px]'>
			<Image
				src={img}
				alt='uy'
				fill
				className='object-cover'
			/>
		</div>
	)
}

export default Decarative
