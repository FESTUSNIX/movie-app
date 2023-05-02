export const getGenres = async () => {
	const res = await fetch(`https://api.themoviedb.org/3/genre/list?api_key=${process.env.API_KEY}`)

	if (!res.ok) throw new Error('failed to fetch data')

	const data: any = await res.json()

	return data
}
