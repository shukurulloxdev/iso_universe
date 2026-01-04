// import { PhoneCall } from 'lucide-react'

// export default function FloatingBell() {
// 	return (
// 		<button
// 			className='
//         fixed
//         bottom-6 right-6
//         z-50
//         w-14 h-14
//         rounded-full
//         bg-orange-600
//         text-white
//         flex items-center justify-center
//         shadow-lg
//         hover:scale-105
//         transition
//       '
// 		>
// 			<PhoneCall className='w-6 h-6' />
// 		</button>
// 	)
// }
import { PhoneCall } from 'lucide-react'

export default function FloatingBell() {
	return (
		<a href='tel:+998902015858' className='fixed bottom-6 right-6 z-50'>
			{/* Ripple */}
			<span
				className='
        absolute inset-0
        rounded-full
        bg-orange-500
        animate-[pulse-ring_1.5s_ease-out_infinite]
      '
			/>

			{/* Button */}
			<button
				className='
          relative
          w-14 h-14
          rounded-full
          bg-orange-600
          text-white
          flex items-center justify-center
          shadow-lg
        '
			>
				<PhoneCall className='w-6 h-6 animate-[ring_1.2s_ease-in-out_infinite]' />
			</button>
		</a>
	)
}
