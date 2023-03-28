import { MovieDetails } from '@/types/types'

export const getMovieDetails = async (id: number) => {
	const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`)

	if (!res.ok) throw new Error('failed to fetch data')

	const data: MovieDetails = await res.json()

	return data
}
