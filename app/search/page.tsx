'use client'

import React, { useState } from 'react'
import { Field } from './components/Field'
import { SearchMultiResult } from '@/types/types'
import { GridContainer } from './components/GridContainer'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Trending } from './components/Trending'
import { Filter } from './components/Filter'

const Search = () => {
	const [isPending, setIsPending] = useState(false)
	const [error, setError] = useState('')

	const [searchValue, setSearchValue] = useState('')
	const [searchResults, setSearchResults] = useState<SearchMultiResult[]>([])
	const [hasMore, setHasMore] = useState(true)
	const [page, setPage] = useState(1)

	const fetchMovies = async (getNewPage: boolean = false) => {
		try {
			if (searchValue === '') return setSearchResults([])

			setIsPending(true)

			let fetchPage = getNewPage ? page + 1 : 1

			if (!getNewPage) {
				setPage(1)
				setHasMore(true)
			} else {
				setPage(prevPage => prevPage + 1)
			}

			const res = await fetch(`/api/search/${searchValue}/${fetchPage}`)
			const data = await res.json()

			setHasMore(data.page < data.total_pages)

			setSearchResults(prevSearchResults => (getNewPage ? [...prevSearchResults, ...data.results] : [...data.results]))
			setIsPending(false)
		} catch (error) {
			let message
			if (error instanceof Error) message = error.message
			else message = String(error)

			console.log(message)
			setError(message)
			setIsPending(false)
		}
	}

	return (
		<div className='nav-margin wrapper'>
			<Field searchValue={searchValue} setSearchValue={setSearchValue} fetchMovies={fetchMovies} />

			<Filter />

			{error && <div>{error}</div>}
			{!searchResults.length && searchValue.trim() && !hasMore && (
				<div className='mt-8 text-white/75'>We didn&apos;t find anything related to &quot;{searchValue}&quot;</div>
			)}

			{/* Add skeleton loader */}
			{isPending && <div>Loading...</div>}

			{searchResults.length > 0 && (
				<InfiniteScroll
					dataLength={searchResults.length}
					next={() => fetchMovies(true)}
					hasMore={hasMore}
					style={{ overflow: 'visible' }}
					loader={<h4>Loading...</h4>}>
					<GridContainer data={searchResults} />
				</InfiniteScroll>
			)}

			{!searchResults.length && !searchValue.trim() && <Trending />}
		</div>
	)
}

export default Search
