'use client'

import { TVDetails } from '@/types/types'
import React, { useState } from 'react'
import { Episodes } from './Episodes'

type Props = {
	details: TVDetails
	id: number
}

export const SeasonPicker = ({ details, id }: Props) => {
	const [activeSeason, setActiveSeason] = useState(1)

	return (
		<div>
			<div className='flex items-center'>
				{details.seasons.map(season => (
					<button
						className={`cursor-pointer py-2 px-4 text-lg  duration-300  ${
							activeSeason === season.season_number
								? 'font-bold text-white'
								: 'text-white/70 hover:text-white/90 active:text-white/75'
						}`}
						key={season.id}
						onClick={() => setActiveSeason(season.season_number)}>
						{season.name}
					</button>
				))}
			</div>

			<Episodes id={id} activeSeason={activeSeason} />
		</div>
	)
}
