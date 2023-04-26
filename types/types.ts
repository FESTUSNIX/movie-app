export type Image = {
	aspect_ratio: number
	file_path: string
	height: number
	iso_639_1: null | string
	vote_average: number
	vote_count: number
	width: number
}

export type BasicMovieDetails = {
	adult: boolean
	backdrop_path: string | null
	genre_ids: number[]
	id: number
	original_language: string
	original_title: string
	overview: string
	release_date: string
	poster_path: string
	popularity: number
	title: string
	video: boolean
	vote_average: number
	vote_count: number
}

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
	results: BasicMovieDetails[]
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

export type MovieImages = {
	id: number
	backdrops: Image[]
	posters: Image[]
	logos: Image[]
}

export type Collection = {
	id: number
	name: string
	overview: string
	poster_path: null
	backdrop_path: string
	parts: BasicMovieDetails[]
}

export type Collections = {
	page: number
	results: {
		id: number
		backdrop_path: string | null
		name: string
		poster_path: string | null
	}[]
	total_pages: number
	total_results: number
}

export type TVListObject = {
	poster_path: string | null
	popularity: number
	id: number
	overview: string
	backdrop_path: string | null
	vote_average: number
	media_type: string
	first_air_date: string
	origin_country: string[]
	genre_ids: number[]
	original_language: string
	vote_count: number
	name: string
	original_name: string
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

export type MediaType = {
	media_type: 'movie' | 'tv' | 'person'
}

export type PersonListObject = {
	profile_path: string | null
	adult: boolean
	id: number
	media_type: string
	name: string
	popularity: number
	known_for: (BasicMovieDetails & MediaType) | (TVListObject & MediaType)
}

export type PersonImages = {
	id: number
	profiles: Image[]
}

export type SearchMulti = {
	page: number
	results: SearchMultiResult[]
	total_results: number
	total_pages: number
}

export type SearchMultiResult = (BasicMovieDetails | TVListObject) & MediaType
