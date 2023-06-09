'use client'

import Image from 'next/image'
import React, { KeyboardEvent, useEffect } from 'react'
import SearchIcon from '@/public/search.svg'

type Props = {
	searchValue: string
	searchInputElement: React.RefObject<HTMLInputElement>
	setSearchValue: React.Dispatch<React.SetStateAction<string>>
	fetchMovies: () => void
}

export const Field = ({ searchValue, setSearchValue, fetchMovies, searchInputElement }: Props) => {
	useEffect(() => {
		const timeoutId = setTimeout(() => fetchMovies(), 750)
		return () => clearTimeout(timeoutId)
	}, [searchValue])

	const handleSearchSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
		if (!e.currentTarget.value.trim()) return

		if (e.key === 'Enter') fetchMovies()
	}

	return (
		<label className='my-4 flex w-full cursor-text items-center rounded-2xl border border-white/5 bg-bg/25 px-4 py-2.5 duration-200 focus-within:border-white/30 hover:border-white/20 active:border-white/20'>
			<input
				type='text'
				placeholder='What are you looking for?'
				value={searchValue}
				onChange={e => setSearchValue(e.target.value)}
				onKeyUp={e => handleSearchSubmit(e)}
				ref={searchInputElement}
				className='h-full grow bg-transparent text-2xl outline-none'
			/>

			<button
				className='cursor-pointer px-3 py-[0.688rem]'
				onClick={() => {
					if (!searchValue.trim()) return
					return fetchMovies()
				}}>
				<Image src={SearchIcon} alt='search icon' draggable='false' className='min-w-[18px] sm:min-w-[22px]' />
			</button>
		</label>
	)
}
