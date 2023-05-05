'use client'

import React from 'react'
import { GridItem } from '../elements/GridItem'
import { SearchMultiResult } from '@/types/Search'

type Props = {
	data: SearchMultiResult[]
}

export const GridContainer = ({ data }: Props) => {
	return (
		<div className='mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7'>
			{data
				.filter(result => result.media_type !== 'person')
				.map((result, index) => (
					<GridItem result={result} key={index} />
				))}
		</div>
	)
}
