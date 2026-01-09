'use client'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { IProject } from '@/types/types'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

export default function LoyhaCard(project: IProject) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 80 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
			viewport={{ once: true }}
			whileHover={{ y: -5 }}
		>
			<Link href={project.slug}>
				<Card className='group w-full overflow-hidden cursor-pointer rounded-2xl border border-gray-200 bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl'>
					{/* Image */}
					<CardHeader className='relative h-[250px] w-full p-0 overflow-hidden'>
						<motion.div
							whileHover={{ scale: 1.08 }}
							transition={{ duration: 0.6, ease: 'easeOut' }}
							className='h-full w-full'
						>
							<Image
								src={project.image}
								alt={project.name}
								fill
								className='object-cover'
							/>
						</motion.div>

						{/* Badge */}
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.3 }}
							className='absolute left-3 top-3'
						>
							<Badge className='rounded-full bg-orange-50 px-3 py-1 text-sm font-semibold text-black backdrop-blur'>
								{project.status}
							</Badge>
						</motion.div>
					</CardHeader>

					<CardContent className='space-y-4 px-5 py-4'>
						{/* Title */}
						<div className='flex items-center justify-between'>
							<h3 className='text-xl font-semibold tracking-tight'>
								{project.name}
							</h3>

							<div className='flex items-center gap-1 text-muted-foreground'>
								<MapPin className='h-4 w-4' />
								<p className='text-sm'>Margilon shahar</p>
							</div>
						</div>

						{/* Info */}
						<div className='flex items-center justify-between text-sm'>
							<p className='font-medium'>Turar joy majmuasi</p>
							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.4 }}
								className='font-semibold'
							>
								2343 m²
							</motion.p>
						</div>

						{/* Button */}
						<motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
							<Button
								variant='outline'
								className='w-full rounded-full transition-all duration-300 group-hover:bg-gray-200'
							>
								Batafsil ko‘rish
							</Button>
						</motion.div>
					</CardContent>
				</Card>
			</Link>
		</motion.div>
	)
}
