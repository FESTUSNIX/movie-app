'use client'

import React from 'react'
import { Image } from '@/types/Shared'
import { useLightboxContext } from '../modules/Lightbox/hooks/useLightboxContext'

type Props = {
	children: React.ReactNode
	index: number
	images: Image[]
}

export const LightboxOpener = ({ children, index, images }: Props) => {
	const { setIndex, setImages } = useLightboxContext()

	return (
		<div
			className='contents'
			onClick={() => {
				setIndex(index)
				setImages(images)
			}}>
			{children}
		</div>
	)
}
