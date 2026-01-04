// components/BrilliantCard.tsx
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { IProject } from '@/types/types'
import { MapPinHouse } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../ui/button'

export default function LoyhaCard(project: IProject) {
	return (
		<Card className='w-full overflow-hidden rounded-2xl border border-gray-200 shadow-lg'>
			<CardHeader className='relative h-60 w-full p-0'>
				<Image
					src={project.image}
					alt={project.name}
					fill
					className='object-cover'
				/>
				<Badge className='absolute top-2 left-2 ' variant={'secondary'}>
					{project.direction}
				</Badge>
			</CardHeader>

			<CardContent className='space-y-3 p-4'>
				<div className='flex items-center justify-between'>
					<h3 className='text-xl font-bold text-gray-800 font-lexend'>
						{project.name}
					</h3>
					<div className='flex items-center gap-1'>
						<MapPinHouse className='w-4 h-4' />
						<span className='text-sm'>{project.location}</span>
					</div>
				</div>

				<Badge
					className='px-3 py-1 text-sm bg-gray-200 text-black'
					variant={'default'}
				>
					{project.volume} kvartira
				</Badge>
				<Button
					variant='outline'
					className='
         w-full
         border border-gray-400 
         rounded-full
                '
				>
					Ko`proq
				</Button>
			</CardContent>
		</Card>
	)
}
