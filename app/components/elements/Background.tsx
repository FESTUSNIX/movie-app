'use client'

import { useScrollPosition } from '@/app/hooks/useScrollPosition'
import Image from 'next/image'
import React from 'react'
import imagePrefix from '@/app/constants/imagePrefix'

export const Background = ({ imagePath }: { imagePath: string | null }) => {
	const scrollPosition = useScrollPosition()

	const styleScrollPosition = () => {
		let opacity: number = 1 - scrollPosition / 800

		if (scrollPosition > 700) opacity = 0.1

		return opacity
	}

	return (
		<div className='fixed top-0 left-0 -z-10 w-full max-w-[100vw]' style={{ opacity: styleScrollPosition() }}>
			<div className='image-cover'></div>
			<Image
				src={imagePrefix + (imagePath || '')}
				alt='background image'
				width={1900}
				height={1000}
				priority
				className='w-full'
			/>
		</div>
	)
}
