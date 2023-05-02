import { TVSeasonDetails } from '@/types/TV'

export const getTVSeasonDetails = async (id: number, seasonNumber: number) => {
	const res = await fetch(`https://api.themoviedb.org/3/tv/${id}/season/${seasonNumber}?api_key=${process.env.API_KEY}`)

	if (!res.ok) throw new Error('failed to fetch data')

	const data: TVSeasonDetails = await res.json()

	return data
}
