import LoyhaCard from '@/components/cards/loyha-card'
import { houseProjects } from '@/lib/constants'
import { IProject } from '@/types/types'

function Projects() {
	return (
		<div className='bg-violet-50' id='loyhalar'>
			<div className='max-w-6xl mx-auto max-md:px-3 pb-8'>
				<div className='flex items-center justify-center py-5 md:py-8'>
					<h1 className='text-[25px] md:text-3xl font-bold text-gray-800 font-lexend '>
						Bizning loyihalarimiz!
					</h1>
				</div>
				{/*  */}
				<div className='grid grid-cols-3 max-md:grid-cols-1 gap-4 mt-2'>
					{houseProjects.map((project: IProject) => (
						<LoyhaCard key={project.volume} {...project} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Projects
