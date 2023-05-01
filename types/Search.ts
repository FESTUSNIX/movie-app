import { BasicMovieDetails } from './Movies'
import { MediaType } from './Shared'
import { TVListObject } from './TV'

export type SearchMulti = {
	page: number
	results: SearchMultiResult[]
	total_results: number
	total_pages: number
}

export type SearchMultiResult = (BasicMovieDetails | TVListObject) & MediaType
