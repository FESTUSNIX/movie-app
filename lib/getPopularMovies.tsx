import { MovieList } from '@/types/types'

export const getPopularMovies = async (limit: number = -1) => {
	const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)

	if (!res.ok) throw new Error('failed to fetch data')

	let data: MovieList = await res.json()
	data.results.splice(limit)

	return data
}
