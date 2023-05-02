import { Credits } from '@/types/Shared'

export const getTVCredits = async (id: number) => {
	const res = await fetch(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${process.env.API_KEY}&language=en-US`)

	if (!res.ok) throw new Error('failed to fetch data')

	const data: Credits = await res.json()

	return data
}
