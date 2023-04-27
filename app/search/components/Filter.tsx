'use client'

import genres from '@/app/assets/genres'
import React from 'react'
import Select from 'react-select'

type Props = {
	setIncludeAdult: React.Dispatch<React.SetStateAction<boolean>>
	setMediaType: React.Dispatch<React.SetStateAction<string>>
	setIncludedGenres: React.Dispatch<React.SetStateAction<(number | 'all')[]>>
}
type selectOptions = { value: any; label: string }[]

let genresOptions: selectOptions = [{ value: 'all', label: 'All' }]
genres.filter(genre => genresOptions.push({ value: genre.id, label: genre.name }))

export const Filter = ({ setIncludeAdult, setMediaType, setIncludedGenres }: Props) => {
	const adultContentOptions: selectOptions = [
		{ value: false, label: 'Exclude Adult Content' },
		{ value: true, label: 'Include Adult Content' }
	]

	const mediaTypeOptions: selectOptions = [
		{ value: 'multi', label: 'Both' },
		{ value: 'movie', label: 'Movies' },
		{ value: 'tv', label: 'TV Shows' }
	]

	return (
		<div className='flex flex-wrap gap-4'>
			<Select
				className='dark-react-select-container shrink-0 max-lg:grow'
				classNamePrefix='dark-react-select'
				name='mediaType'
				placeholder='Media type'
				defaultValue={mediaTypeOptions[0]}
				options={mediaTypeOptions}
				isSearchable={false}
				onChange={choice => setMediaType(choice?.value)}
			/>

			<Select
				className='dark-react-select-container shrink-0 max-lg:grow'
				classNamePrefix='dark-react-select'
				name='adultContent'
				placeholder='Adult content'
				defaultValue={adultContentOptions[0]}
				options={adultContentOptions}
				isSearchable={false}
				onChange={choice => setIncludeAdult(choice?.value)}
			/>

			<Select
				className='dark-react-select-container max-lg:grow'
				classNamePrefix='dark-react-select'
				isMulti
				name='genres'
				placeholder='Genres'
				defaultValue={genresOptions[0]}
				options={genresOptions}
				onChange={choices => setIncludedGenres([...choices.map(choice => choice.value)])}
			/>
		</div>
	)
}
