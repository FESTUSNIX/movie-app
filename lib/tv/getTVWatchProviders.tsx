export const getTVWatchProvider = async (id: number) => {
	const res = await fetch(`https://api.themoviedb.org/3/tv/${id}/watch/providers?api_key=${process.env.API_KEY}`)

	if (!res.ok) throw new Error('failed to fetch data')

	const data = await res.json()

	return data
}
