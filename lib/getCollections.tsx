import { Collection } from '@/types/types'

export const getCollections = async (id: number) => {
	const res = await fetch(`https://api.themoviedb.org/3/collection/${id}?api_key=${process.env.API_KEY}`)

	if (!res.ok) throw new Error('failed to fetch data')

	const data: Collection = await res.json()

	return data
}
