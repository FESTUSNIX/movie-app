'use client'

import React, { useEffect, useState } from 'react'
import { GridContainer } from './GridContainer'
import { SectionHeading } from '@/app/components/elements/SectionHeading'
import { SearchMulti, SearchMultiResult } from '@/types/Search'

export const Trending = () => {
	const [trending, setTrending] = useState<SearchMultiResult[]>()

	useEffect(() => {
		const fetchTrending = async () => {
			const res = await fetch(`/api/trending`)
			const data: SearchMulti = await res.json()

			setTrending(data.results)
		}

		fetchTrending()
	}, [])

	if (!trending) return null

	return (
		<>
			<SectionHeading className='mt-8'>Now trending</SectionHeading>
			<GridContainer data={trending} />
		</>
	)
}
