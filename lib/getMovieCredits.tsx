import { MovieCredits } from '@/types/types'

export const getMovieCredits = async (id: number) => {
	const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.API_KEY}`)

	if (!res.ok) throw new Error('failed to fetch data')

	const data: MovieCredits = await res.json()

	return data
}
