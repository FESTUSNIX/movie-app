import { MediaImages } from '@/types/Shared'

export const getTVImages = async (id: number) => {
	const res = await fetch(
		`https://api.themoviedb.org/3/tv/${id}/images?api_key=${process.env.API_KEY}&include_image_language=en,null`
	)

	if (!res.ok) throw new Error('failed to fetch data')

	const data: MediaImages = await res.json()

	return data
}
