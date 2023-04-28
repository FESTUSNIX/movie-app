import imagePrefix from '@/app/assets/imagePrefix'
import { ImageSlider } from '@/app/components'
import { formatMinutes } from '@/app/utils/formatMinutes'
import { getTVSeasonDetails } from '@/lib/getTVSeasonDetails'
import { TVDetails, TVSeasonDetails } from '@/types/types'
import Image from 'next/image'
import React from 'react'

type Props = {
	id: number
	details: TVDetails
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

export const Episodes = async ({ id, details }: Props) => {
	const seasonDetails = await getTVSeasonDetails(id, details.seasons[0].season_number)

	return (
		<div className='py-4'>
			<ImageSlider responsiveSettings={sliderSettings}>
				{seasonDetails?.episodes.map(episode => (
					<div key={episode.id} className='group relative w-full cursor-pointer duration-300 hover:scale-105'>
						<div className='relative mb-1 overflow-hidden rounded-xl border-2 border-transparent duration-300 hover:border-white'>
							<Image src={imagePrefix + episode.still_path} alt={episode.name} width={700} height={500} className='' />
							<div className='absolute inset-0 bg-black/40 opacity-0 duration-300 ease-in-out group-hover:opacity-100'></div>
						</div>
						<div className='absolute'>
							<div className='flex items-center text-sm font-semibold text-white/90'>
								<span>{episode.episode_number}.&nbsp;</span>
								<h3>{episode.name}</h3>
								<span className='font-normal'>&nbsp;&nbsp;•&nbsp;&nbsp;{formatMinutes(episode.runtime)}</span>
							</div>
							<p className='flex items-center gap-2 pr-3 text-xs font-normal text-white/70'>{episode.overview}</p>
						</div>
					</div>
				))}
			</ImageSlider>
		</div>
	)
}
