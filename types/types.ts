export type MovieDetails = {
	adult: boolean
	backdrop_path: string | null
	belongs_to_collection: null | Object
	budget: number
	genres: { id: number; name: string }[]
	homepage: string | null
	id: number
	imdb_id: string | null
	original_language: string
	original_title: string
	overview: string | null
	popularity: number
	poster_path: string | null
	production_companies: {
		name: string
		id: number
		logo_path: string | null
		origin_country: string
	}[]
	production_countries: {
		iso_3166_1: string
		name: string
	}[]
	release_date: string
	revenue: number
	runtime: number
	spoken_languages: {
		iso_639_1: string
		name: string
	}[]
	status: 'Rumored' | 'Planned' | 'In Production' | 'Post Production' | 'Released' | 'Canceled'
	tagline: string | null
	title: string
	video: boolean
	vote_average: number
	vote_count: number
}

export type MovieList = {
	page: number
	results: {
		poster_path: string | null
		adult: boolean
		overview: string
		release_date: string
		genre_ids: number[]
		id: number
		original_title: string
		original_language: string
		title: string
		backdrop_path: string | null
		popularity: number
		vote_count: number
		video: boolean
		vote_average: number
	}[]
	total_results: number
	total_pages: number
}

export type MovieCredits = {
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

export type PersonDetails = {
	birthday: string | null
	known_for_department: string
	deathday: null | string
	id: number
	name: string
	also_known_as: string[]
	gender: 0 | 1 | 2 | 3
	biography: string
	popularity: number
	place_of_birth: string | null
	profile_path: string | null
	adult: boolean
	imdb_id: string
	homepage: string | null
}

export type PersonImages = {
	id: number
	profiles: {
		aspect_ratio: number
		file_path: string
		height: number
		iso_639_1: null
		vote_average: number | number
		vote_count: number
		width: number
	}[]
}
