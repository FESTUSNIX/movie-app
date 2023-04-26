import { Collections } from '@/types/types'

export const getCollectionsSearch = async (query: string) => {
	const res = await fetch(
		`https://api.themoviedb.org/3/search/collection?api_key=${process.env.API_KEY}&query=${query}`
	)

	if (!res.ok) throw new Error('failed to fetch data')

	const data: Collections = await res.json()

	return data
}
