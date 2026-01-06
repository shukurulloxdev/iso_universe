// 'use client'
// import { ReviewCard } from '@/components/cards/review-card'
// import {
// 	Carousel,
// 	CarouselContent,
// 	CarouselItem,
// 	CarouselNext,
// 	CarouselPrevious,
// } from '@/components/ui/carousel'
// import { reviewsTop } from '@/lib/constants'

// import Autoplay from 'embla-carousel-autoplay'
// function Reviews() {
// 	return (
// 		<div className='bg-blue-200 w-full overflow-hidden '>
// 			<div className='w-full flex flex-col gap-4 py-12 '>
// 				<div className='w-full'>
// 					<Carousel
// 						opts={{ align: 'start', loop: true }}
// 						plugins={[
// 							Autoplay({
// 								delay: 2000, // 🔑 MUHIM
// 								stopOnInteraction: false,
// 							}),
// 						]}
// 						className='w-full'
// 					>
// 						<CarouselContent>
// 							{reviewsTop.map(product => (
// 								<CarouselItem
// 									key={product.id}
// 									className='basis-1/3  max-md:basis-1/4'
// 								>
// 									<ReviewCard {...product} />
// 								</CarouselItem>
// 							))}
// 						</CarouselContent>
// 						<CarouselPrevious />
// 						<CarouselNext />
// 					</Carousel>
// 				</div>
// 				<div>s</div>
// 			</div>
// 		</div>
// 	)
// }

// export default Reviews
'use client'
import { ReviewCard } from '@/components/cards/review-card'
import { reviewsTop } from '@/lib/constants'

function Reviews() {
	return (
		<div className='bg-blue-200 w-full overflow-hidden '>
			<div className='w-full flex flex-col gap-4 py-12 '>
				<div className='overflow-hidden w-full'>
					<div className='flex gap-20 animate-marquee hover:[animation-play-state:paused]'>
						{reviewsTop.concat(reviewsTop).map((review, i) => (
							<ReviewCard key={i} {...review} />
						))}
					</div>
				</div>

				<div>s</div>
			</div>
		</div>
	)
}

export default Reviews
