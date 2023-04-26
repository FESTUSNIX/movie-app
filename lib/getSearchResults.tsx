import { SearchMulti } from '@/types/types'

export const getSearchResults = async (query: string, page: string = '1') => {
	const res = await fetch(
		`https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY}&query=${query}&include_adult=true&page=${page}`
	)

	if (!res.ok) throw new Error('failed to fetch data')

	const data: SearchMulti = await res.json()

	return data
}
