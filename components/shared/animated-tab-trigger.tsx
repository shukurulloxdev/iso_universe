import { motion } from 'framer-motion'
import { TabsTrigger } from '../ui/tabs'

export function AnimatedTabTrigger({
	value,
	children,
}: {
	value: string
	children: React.ReactNode
}) {
	return (
		<TabsTrigger
			value={value}
			className='relative text-lg px-4 py-2 rounded-2xl
      shadow-md
      transition-all duration-300
      data-[state=active]:text-black
      data-[state=active]:font-semibold'
		>
			{children}

			{/* underline faqat active bo‘lsa chiqadi */}
			<motion.div
				layoutId='underline'
				className='absolute -bottom-2 left-2 right-2 h-[3px] rounded-full bg-orange-400'
			/>
		</TabsTrigger>
	)
}
