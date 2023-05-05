'use client'

import { useScrollPosition } from '@/app/hooks/useScrollPosition'
import React from 'react'

export const Background = () => {
	const scrollPosition = useScrollPosition()

	return (
		<div
			className={`${
				scrollPosition > 10 ? 'bg-bg/40 backdrop-blur-md' : ''
			}  absolute inset-0 -z-10 transition-colors duration-700`}></div>
	)
}
