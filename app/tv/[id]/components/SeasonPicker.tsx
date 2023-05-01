'use client'

import React, { useState } from 'react'
import { Episodes } from './Episodes'
import { TVDetails } from '@/types/TV'
import Select from 'react-select'
import { selectOptions } from '@/types/Shared'

type Props = {
	details: TVDetails
	id: number
}

export const SeasonPicker = ({ details, id }: Props) => {
	let seasonsList: selectOptions = []
	details.seasons.filter(season => seasonsList.push({ value: season.season_number, label: season.name }))

	const [activeSeason, setActiveSeason] = useState(details.seasons[0].season_number)

	return (
		<div>
			<Select
				className='dark-react-select-container paddingXL w-40 max-w-full'
				classNamePrefix='dark-react-select'
				name='seasonsList'
				placeholder='Pick a season'
				defaultValue={seasonsList[0]}
				options={seasonsList}
				isSearchable={false}
				onChange={choice => setActiveSeason(choice?.value)}
			/>

			<Episodes id={id} activeSeason={activeSeason} />
		</div>
	)
}
