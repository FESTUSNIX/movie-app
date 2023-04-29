'use client'

import { ImageSlider } from '@/app/components'
import {  TVSeasonDetails } from '@/types/types'
import React, { useEffect, useState } from 'react'
import { Episode } from './Episode'

type Props = {
	id: number
	activeSeason: number
}

const sliderSettings = [
	{
		breakpoint: 0,
		settings: {
			slidesToShow: 5,
			slidesToScroll: 5
		}
	},
	{
		breakpoint: 1500,
		settings: {
			slidesToShow: 4,
			slidesToScroll: 4
		}
	},
	{
		breakpoint: 1200,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 3
		}
	},
	{
		breakpoint: 877,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		}
	},
	{
		breakpoint: 640,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}
]

export const Episodes = ({ id, activeSeason }: Props) => {
	const [seasonDetails, setSeasonDetails] = useState<TVSeasonDetails>()

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(`/api/seasonDetails/${id}/${activeSeason}`)
			const data = await res.json()

			setSeasonDetails(data)
		}

		fetchData()
	}, [activeSeason, id])

	if (!seasonDetails) return null

	return (
		<div className='py-4'>
			<ImageSlider responsiveSettings={sliderSettings}>
				{seasonDetails?.episodes.map(episode => (
					<Episode key={episode.id} episode={episode}/>
				))}
			</ImageSlider>
		</div>
	)
}
