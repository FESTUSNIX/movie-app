import { VideoList } from '@/types/Shared'

export const getTVVideos = async (id: number) => {
	const res = await fetch(
		`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${process.env.API_KEY}&include_video_language=en,null`
	)

	if (!res.ok) throw new Error('failed to fetch data')

	const data: VideoList = await res.json()

	return data
}
