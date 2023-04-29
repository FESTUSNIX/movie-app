import { Background } from '@/app/components'
import { getTVDetails } from '@/lib/getTVDetails'
import React from 'react'
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

			<SeasonPicker details={details} id={id} />
		</div>
	)
}
export default Tv
