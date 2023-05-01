import { BasicMovieDetails } from './Movies'

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
