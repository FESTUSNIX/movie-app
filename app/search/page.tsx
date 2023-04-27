'use client'

import React, { useEffect, useState } from 'react'
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

	const [includeAdult, setIncludeAdult] = useState(false)
	const [mediaType, setMediaType] = useState('multi')
	const [includedGenres, setIncludedGenres] = useState<(number | 'all')[]>([])

	const fetchMovies = async (getNewPage: boolean = false) => {
		try {
			if (searchValue === '') return setSearchResults([])

			if (!getNewPage) {
				setPage(1)
				setHasMore(true)
			} else {
				setPage(prevPage => prevPage + 1)
			}

			setIsPending(true)

			const res = await fetch(
				`/api/search/${searchValue}/${getNewPage ? page + 1 : 1}?media_type=${mediaType}&include_adult=${includeAdult}`
			)
			const data = await res.json()

			const filteredData =
				!includedGenres.length || includedGenres.includes('all')
					? data.results
					: data.results.filter((result: SearchMultiResult) =>
							result.genre_ids.some(genre => includedGenres.includes(genre))
					  )

			setSearchResults(prevSearchResults => (getNewPage ? [...prevSearchResults, ...filteredData] : [...filteredData]))
			setHasMore(data.page < data.total_pages)
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

	useEffect(() => {
		if (searchValue !== '') {
			fetchMovies()
		}
	}, [mediaType, includeAdult, includedGenres])

	return (
		<div className='nav-margin wrapper'>
			<Field searchValue={searchValue} setSearchValue={setSearchValue} fetchMovies={fetchMovies} />

			<Filter setIncludeAdult={setIncludeAdult} setMediaType={setMediaType} setIncludedGenres={setIncludedGenres} />

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