export default function Navbar() {
	return (
		<nav className='fixed top-0 h-[85px] max-md:h-[78px]  left-0 w-full z-50 flex justify-center pt-6'>
			<div
				className='
          w-[92%] max-w-6xl
          flex items-center justify-between
          px-6 py-3
          rounded-full
          bg-white/10
          backdrop-blur-xl
          shadow-[0_0_40px_rgba(255,255,255,0.05)]
          border border-white/10
        '
			>
				{/* Left - Logo */}
				<div className='text-lg font-semibold tracking-wide'>
					ISO_<span className='font-bold'>Universe</span>
				</div>

				{/* Center Menu */}

				{/* Right */}
				<button
					className='
              px-5 py-2
              rounded-full
              text-sm
              bg-white/10
              border border-white/10
              hover:bg-white/20
              transition
            '
				>
					Kirish
				</button>
			</div>
		</nav>
	)
}
