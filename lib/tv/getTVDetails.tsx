import { TVDetails } from '@/types/TV'

export const getTVDetails = async (id: number) => {
	const res = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.API_KEY}`)

	if (!res.ok) throw new Error('failed to fetch data')

	const data: TVDetails = await res.json()

	return data
}
