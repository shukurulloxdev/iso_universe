import { create } from 'zustand'

interface VideoStoreTip {
	isOpen: boolean
	toggleIsOpen: () => void
}

export const useVideoStore = create<VideoStoreTip>(set => ({
	isOpen: false,
	toggleIsOpen: () => set(state => ({ isOpen: !state.isOpen })),
}))
