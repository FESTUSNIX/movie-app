import { MovieImages } from '@/types/Movies'

export const getMovieImages = async (id: number) => {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.API_KEY}&include_image_language=en,null`
	)

	if (!res.ok) throw new Error('failed to fetch data')

	const data: MovieImages = await res.json()

	return data
}
