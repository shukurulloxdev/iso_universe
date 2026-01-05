'use client'

import { animate, useMotionValue } from 'framer-motion'
import { useEffect, useState } from 'react'

function Counter({ value }: { value: number }) {
	const count = useMotionValue(0)
	const [display, setDisplay] = useState(0)

	useEffect(() => {
		const controls = animate(count, value, {
			duration: 2, // tezligi (soniya)
			ease: 'easeOut',
		})

		count.on('change', latest => {
			setDisplay(Math.floor(latest))
		})

		return controls.stop
	}, [value])

	return <span>{display}</span>
}

export default Counter
