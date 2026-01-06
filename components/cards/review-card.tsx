import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

type Props = {
	name: string
	location: string
	image: string
	text: string
}

export function ReviewCard({ name, location, image, text }: Props) {
	return (
		<Card className='w-[360px] rounded-2xl border border-white/10 bg-white/90 backdrop-blur shadow-lg hover:shadow-xl transition-shadow'>
			<CardContent className='p-5 space-y-3'>
				<div className='flex items-center gap-3'>
					<Image
						src={image}
						alt={name}
						width={44}
						height={44}
						className='rounded-full object-cover'
					/>
					<div className='leading-tight'>
						<h4 className='font-semibold text-base'>{name}</h4>
						<p className='text-xs text-muted-foreground'>{location}</p>
					</div>
				</div>

				<p className='text-sm text-muted-foreground leading-relaxed line-clamp-3'>
					{text}
				</p>
			</CardContent>
		</Card>
	)
}
