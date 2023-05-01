import { BasicMovieDetails } from './Movies'
import { Image, MediaType } from './Shared'
import { TVListObject } from './TV'

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
