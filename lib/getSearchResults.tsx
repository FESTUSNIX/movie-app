import { SearchMulti } from '@/types/types'

export const getSearchResults = async (
	query: string,
	page: string = '1',
	mediaType: 'multi' | 'movie' | 'tv' = 'multi',
	includeAdult: boolean = false
) => {
	const res = await fetch(
		`https://api.themoviedb.org/3/search/${mediaType}?api_key=${process.env.API_KEY}&query=${query}&include_adult=${includeAdult}&page=${page}&with_genres=99`
	)

	if (!res.ok) throw new Error('failed to fetch data')

	const data: SearchMulti = await res.json()

	return data
}
