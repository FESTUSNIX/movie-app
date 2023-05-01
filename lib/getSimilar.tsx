import { MovieList } from '@/types/Movies'

export const getSimilar = async (id: number) => {
	const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.API_KEY}`)

	if (!res.ok) throw new Error('failed to fetch data')

	const data: MovieList = await res.json()

	return data
}
