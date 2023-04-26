'use client'

import { useScrollPosition } from '@/app/hooks/useScrollPosition'
import { MovieDetails } from '@/types/types'
import Image from 'next/image'
import React from 'react'

export const Background = ({ data }: { data: MovieDetails }) => {
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
				src={'https://image.tmdb.org/t/p/original' + data.backdrop_path}
				alt=''
				width={1900}
				height={1000}
				priority
				className='w-full'
			/>
		</div>
	)
}
