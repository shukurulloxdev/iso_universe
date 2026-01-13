import Counter from '@/components/shared/counter'

function Statistics() {
	return (
		<div className='max-md:hidden bg-orange-50'>
			<div className='max-w-6xl mx-auto py-2'>
				<div className='w-full flex justify-between'>
					<div className='flex flex-col'>
						<h1 className='text-5xl leading-tight font-lexend'>
							<Counter value={1430} />+
						</h1>
						<p>Baxtli mijozlar</p>
					</div>

					<div className='flex flex-col'>
						<h1 className='text-5xl leading-tight font-lexend'>
							<Counter value={300} />+
						</h1>
						<p>Tajribali xodimlar</p>
					</div>

					<div className='flex flex-col'>
						<h1 className='text-5xl leading-tight font-lexend'>
							<Counter value={23} />+
						</h1>
						<p>Zamonaviy binolar</p>
					</div>

					<div className='flex flex-col'>
						<h1 className='text-5xl leading-tight font-lexend flex items-center'>
							<Counter value={100} /> <span className='text-4xl'>%</span>
						</h1>
						<p>Mijozlarning qoniqishi</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Statistics
