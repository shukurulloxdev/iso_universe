'use client'
import { useVideoStore } from '@/zustand/store/videoStore'
import Player from '@vimeo/player'
import { useEffect, useRef, useState } from 'react'
import { Skeleton } from '../ui/skeleton'

function VimeoComp({
	videoId,
	autoplay = false,
}: {
	videoId: number
	autoplay: boolean
}) {
	const { toggleIsOpen } = useVideoStore()
	const [isLoading, setIsLoading] = useState(true)
	const playerRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (!playerRef.current) return

		const player = new Player(playerRef.current, {
			id: videoId,
			responsive: true,
			autoplay,
		})
		player.ready().then(() => setIsLoading(false))
		player.on('ended', onEnd)

		return () => {
			player.destroy()
		}
	}, [videoId, autoplay])
	function onEnd() {
		console.log('lorem')
		toggleIsOpen()
	}

	return (
		<>
			{isLoading && <Skeleton className='w-full h-full' />}

			<div className='w-full overflow-hidden rounded-lg'>
				<div ref={playerRef} />
			</div>
		</>
	)
}

export default VimeoComp
