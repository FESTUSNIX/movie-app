'use client'

import React from 'react'
import { useLightboxContext } from '../features/lightbox/hooks/useLightboxContext'
import { Image } from '@/types/types'

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
