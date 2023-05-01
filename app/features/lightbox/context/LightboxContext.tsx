'use client'

import { Image } from '@/types/Shared'
import { Dispatch, SetStateAction, createContext, useState } from 'react'

type Props = {
	children: React.ReactNode
}

type Xd = {
	showLightbox: boolean
	setShowLightbox: Dispatch<SetStateAction<boolean>>
	images: Image[]
	setImages: Dispatch<SetStateAction<Image[]>>
	index: number
	setIndex: Dispatch<SetStateAction<number>>
}
export const LightboxContext = createContext<Xd>({
	showLightbox: false,
	setShowLightbox: () => {},
	images: [],
	setImages: () => {},
	index: 0,
	setIndex: () => {}
})

export const LightboxProvider = ({ children }: Props) => {
	const [showLightbox, setShowLightbox] = useState(false)
	const [images, setImages] = useState<Image[]>([])
	const [index, setIndex] = useState(0)

	return (
		<LightboxContext.Provider value={{ showLightbox, setShowLightbox, images, setImages, index, setIndex }}>
			{children}
		</LightboxContext.Provider>
	)
}
