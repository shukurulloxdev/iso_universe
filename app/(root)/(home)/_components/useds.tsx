import { Card } from '@/components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel'
import { usedimages } from '@/lib/constants'
import Image from 'next/image'

function Useds() {
	return (
		<div className='bg-violet-50 max-md:pl-3'>
			<div className='max-w-6xl mx-auto py-14 max-md:py-8'>
				<h1 className='text-3xl max-md:text-2xl font-bold leading-tight font-lexend text-[#4c4e4f]'>
					Ishlatilgan materiallar
				</h1>
				<Carousel opts={{ align: 'start', loop: true }} className='w-full mt-6'>
					<CarouselContent>
						{usedimages.map((item, index) => (
							<CarouselItem key={index} className='basis-1/3 max-md:basis-2/3'>
								<Card>
									<Image
										src={item.image}
										alt={item.id.toString()}
										width={600}
										height={400}
										className='object-cover w-full rounded-2xl md:h-40 h-32'
									/>
								</Card>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</div>
	)
}

export default Useds
