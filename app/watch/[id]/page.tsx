import { getMovieDetails } from '@/lib/movie/getMovieDetails'
import { MovieDetails } from '@/types/Movies'
import React from 'react'

type Props = {
	params: { id: number }
}

const VideoPlayer = async ({ params: { id } }: Props) => {
	const data: MovieDetails = await getMovieDetails(id)

	return (
		<div className='mt-48'>
			<h1>{data.title}</h1>
			<h2>{data.overview}</h2>
		</div>
	)
}

export default VideoPlayer
