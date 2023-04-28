import imagePrefix from '@/app/assets/imagePrefix'
import { Background, ImageSlider } from '@/app/components'
import { formatMinutes } from '@/app/utils/formatMinutes'
import { getTVDetails } from '@/lib/getTVDetails'
import { getTVSeasonDetails } from '@/lib/getTVSeasonDetails'

import Image from 'next/image'
import React from 'react'
import { Episodes } from './components/Episodes'
import { SeasonPicker } from './components/SeasonPicker'

type Props = {
	params: { id: number }
}

export async function generateMetadata({ params }: Props) {
	const details = await getTVDetails(params.id)
	const title = details.name + ' | Novies'

	return { title }
}

const Tv = async ({ params: { id } }: Props) => {
	const details = await getTVDetails(id)

	return (
		<div className='nav-margin wrapper'>
			<Background imagePath={details.backdrop_path} />

			<p>{details.id}</p>
			<p>{details.name}</p>
			<p>{details.overview}</p>
			<p>Seasons - {details.number_of_seasons}</p>
			<p>Episodes - {details.number_of_episodes}</p>
			<p>First air date - {details.first_air_date}</p>
			<p>Tagline - {details.tagline}</p>
			<p>Type - {details.type}</p>

			<br />
			<br />
			<br />

			<SeasonPicker details={details} />

			{/* @ts-expect-error Server Component */}
			<Episodes id={id} details={details} />
		</div>
	)
}
export default Tv
