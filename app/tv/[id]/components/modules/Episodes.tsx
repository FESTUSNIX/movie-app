'use client'

import { ImageSlider } from '@/app/components'
import React, { useEffect, useState } from 'react'
import { Episode } from '../elements/Episode'
import { EpisodeSkeleton } from '../elements/EpisodeSkeleton'
import ErrorDisplay from '@/app/components/elements/ErrorDisplay'
import { TVSeasonDetails } from '@/types/TV'

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
	const [seasonDetails, setSeasonDetails] = useState<TVSeasonDetails | null>(null)
	const [error, setError] = useState('')
	const [isPending, setIsPending] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsPending(true)
				setSeasonDetails(null)

				const res = await fetch(`/api/seasonDetails/${id}/${activeSeason}`)
				const data = await res.json()

				setSeasonDetails(data)
				setIsPending(false)
			} catch (err) {
				let message
				if (err instanceof Error) message = err.message
				else message = String(err)

				console.log(message)
				setError(message)
				setIsPending(false)
			}
		}

		fetchData()
	}, [activeSeason, id])

	return (
		<div className='mb-10 py-4'>
			{error && <ErrorDisplay>{error}</ErrorDisplay>}

			<ImageSlider responsiveSettings={sliderSettings} className='episodes-slider'>
				{seasonDetails?.episodes.map(episode => (
					<Episode key={episode.id} episode={episode} />
				))}
				{isPending &&
					Array(6)
						.fill(0)
						.map((_, index) => <EpisodeSkeleton key={index} />)}
			</ImageSlider>
		</div>
	)
}
