import { PersonDetails } from '@/types/types'

export const getPersonDetails = async (id: number) => {
	const res = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${process.env.API_KEY}&language=en-US`)

	if (!res.ok) throw new Error('failed to fetch data')

	const data: PersonDetails = await res.json()

	return data
}
