import LoyhaCard from '@/components/cards/loyha-card'
import { houseProjects } from '@/lib/constants'
import { IProject } from '@/types/types'

function Projects() {
	return (
		<div className='max-w-6xl mx-auto mt-8 max-md:px-3'>
			<div className='flex items-center justify-center bg-orange-100 py-2 rounded-t-full rounded-br-full'>
				<h1 className='text-[20px] md:text-3xl font-bold text-gray-800 font-lexend '>
					Bizning loyihalarimiz
				</h1>
			</div>
			{/*  */}
			<div className='grid grid-cols-3 max-md:grid-cols-1 gap-4 mt-4'>
				{houseProjects.map((project: IProject) => (
					<LoyhaCard key={project.volume} {...project} />
				))}
			</div>
			<div className='text-white'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolore
				aliquid alias aliquam ut nesciunt architecto ipsum sed mollitia
				consectetur minus possimus, ex nulla sapiente sint ad ratione voluptatum
				saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
				dolore aliqu
			</div>
		</div>
	)
}

export default Projects
