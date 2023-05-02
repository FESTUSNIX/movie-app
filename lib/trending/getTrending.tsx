import { PersonDetails } from '@/types/People'

export const getTrending = async () => {
	const res = await fetch(
		`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.API_KEY}&language=en-US`
	)

	if (!res.ok) throw new Error('failed to fetch data')

	const data: PersonDetails = await res.json()

	return data
}
