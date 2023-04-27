import imagePrefix from '@/app/assets/imagePrefix'
import { Background } from '@/app/components'
import { getTVDetails } from '@/lib/getTVDetails'

import Image from 'next/image'
import React from 'react'

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
		<div className='nav-margin'>
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

			<p>
				{details.seasons.map(season => (
					<div key={season.id}>
						<p>{season.name}</p>
						<p>{season.overview}</p>
						<p>Season no. - {season.season_number}</p>
						<p>Episodes - {season.episode_count}</p>
						<p>{season.air_date}</p>

						<Image src={imagePrefix + season.poster_path} alt={details.name} width={300} height={300} />

						<br />
						<br />
						<br />
					</div>
				))}
			</p>
		</div>
	)
}
export default Tv
