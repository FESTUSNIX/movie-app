export type Image = {
	aspect_ratio: number
	file_path: string
	height: number
	iso_639_1: null | string
	vote_average: number
	vote_count: number
	width: number
}

export type MediaType = {
	media_type: 'movie' | 'tv' | 'person'
}

export type selectOptions = { value: any; label: string }[]

export type MediaImages = {
	id: number
	backdrops: Image[]
	posters: Image[]
	logos: Image[]
}

export type Video = {
	iso_639_1: string
	iso_3166_1: string
	name: string
	key: string
	site: string
	size: number
	type: string
	official: boolean
	published_at: string
	id: string
}

export type VideoList = {
	id: number
	results: Video[]
}

export type Credits = {
	id: number
	cast: {
		adult: boolean
		gender: number | null
		id: number
		known_for_department: string
		name: string
		original_name: string
		popularity: number
		profile_path: string | null
		cast_id: number
		character: string
		credit_id: string
		order: number
	}[]
	crew: {
		adult: boolean
		gender: number | null
		id: number
		known_for_department: string
		name: string
		original_name: string
		popularity: number
		profile_path: string | null
		credit_id: string
		department: string
		job: string
	}[]
}
