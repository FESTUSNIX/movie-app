'use client'

import { TVDetails } from '@/types/types'
import React, { useState } from 'react'

type Props = {
	details: TVDetails
}

export const SeasonPicker = ({ details }: Props) => {
	const [activeSeason, setActiveSeason] = useState(0)

	return (
		<div>
			<div className='flex items-center'>
				{details.seasons.map((season, index) => (
					<button
						className={`cursor-pointer py-2 px-4 text-lg  duration-300  ${
							activeSeason === index ? 'font-bold text-white' : 'text-white/70 hover:text-white/90 active:text-white/75'
						}`}
						key={season.id}
						onClick={() => setActiveSeason(index)}>
						{season.name}
					</button>
				))}
			</div>
		</div>
	)
}
