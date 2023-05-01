import { PersonImages } from '@/types/People'

export const getPersonImages = async (id: number) => {
	const res = await fetch(`https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.API_KEY}`)

	if (!res.ok) throw new Error('failed to fetch data')

	const data: PersonImages = await res.json()

	return data
}
