'use client'

import React, { useState, useEffect, useRef, KeyboardEvent } from 'react'
import Image from 'next/image'
import { SearchMenu } from './components/Menu'
import { MovieList } from '@/types/types'
import { createPortal } from 'react-dom'
import SearchIcon from '@/public/search.svg'
import { motion, useAnimationControls } from 'framer-motion'
import { ConditionalWrapper } from '@/app/components/ConditionalWrapper'
import useDidMountEffect from '@/app/hooks/useDidMountEffect'

const labelAnimations = {
	hidden: {
		width: 0,
		opacity: 0,
		transition: { ease: 'easeInOut', duration: 0.3, opacity: { delay: 0.2, duration: 0.1 } }
	},
	visible: {
		width: '384px',
		opacity: 1,
		transition: { ease: 'easeInOut', duration: 0.5, opacity: { delay: 0.1, duration: 0.1 } }
	}
}

const iconAnimations = {
	hidden: {
		scale: 1.25,
		transition: { ease: 'easeInOut', duration: 0.5 }
	},
	visible: {
		scale: 1,
		transition: { ease: 'easeInOut', duration: 0.5 }
	}
}

export const Search = () => {
	const [searchValue, setSearchValue] = useState('')
	const [searchResults, setSearchResults] = useState<(MovieList & { searchValue: string }) | null>(null)

	const [showSearchMenu, setShowSearchMenu] = useState(false)
	const [isExpanded, setIsExpanded] = useState(false)

	const [isPending, setIsPending] = useState(false)
	const [allowPortal, setAllowPortal] = useState(false)
	const [finishedAnimating, setFinishedAnimating] = useState(false)
	const [timer, setTimer] = useState<NodeJS.Timeout>()

	const inputRefElement = useRef<HTMLInputElement>(null)
	const labelRefElement = useRef<HTMLLabelElement>(null)

	const labelControls = useAnimationControls()
	const iconControls = useAnimationControls()

	const handleClose = () => {
		setIsExpanded(false)
		setShowSearchMenu(false)
		setSearchValue('')
		setSearchResults(null)
		setIsPending(false)
	}

	const startAnimation = () => {
		const variant = isExpanded ? 'visible' : 'hidden'

		labelControls.start(variant)
		iconControls.start(variant)

		if (isExpanded) inputRefElement.current?.focus()
	}

	useEffect(() => {
		if (allowPortal) inputRefElement.current?.focus()

		startAnimation()
	}, [allowPortal])

	useDidMountEffect(() => {
		startAnimation()

		setFinishedAnimating(true)
		setShowSearchMenu(isExpanded)
	}, [isExpanded])

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.currentTarget.value)

		clearTimeout(timer)

		const newTimer = setTimeout(() => {
			fetchMovies()
		}, 1000)

		setTimer(newTimer)
	}

	const handleSearchSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
		if (!e.currentTarget.value.trim()) return

		if (e.key === 'Enter') fetchMovies()
	}

	const fetchMovies = async () => {
		setIsPending(true)

		const res = await fetch(`/api/search/${searchValue}`)
		const data = await res.json()

		setIsPending(false)
		setSearchResults({ ...data, searchValue })
	}

	return (
		<>
			<ConditionalWrapper
				condition={allowPortal}
				wrapper={children => createPortal(children, document.getElementById('search-menu-label')!)}>
				<label ref={labelRefElement} className='relative z-50 flex max-w-full items-center'>
					<motion.div
						layout
						style={{ originX: 'right' }}
						animate={labelControls}
						variants={labelAnimations}
						className={`flex w-96  max-w-full cursor-text items-center gap-2.5 rounded-2xl border border-white/5 bg-bg/25 backdrop-blur-lg focus-within:border-white/30 active:border-white/20 ${
							isExpanded ? 'pointer-events-auto' : 'pointer-events-none'
						}`}>
						<input
							type='text'
							placeholder='Search for a movie'
							value={searchValue}
							onChange={e => handleInputChange(e)}
							onKeyUp={e => handleSearchSubmit(e)}
							ref={inputRefElement}
							className='w-[calc(100%-40px)] bg-transparent px-4 py-2.5 outline-none'
						/>
					</motion.div>

					<motion.button
						animate={iconControls}
						variants={iconAnimations}
						className='absolute right-0 cursor-pointer px-2 py-[0.688rem]'
						onClick={() => {
							if (showSearchMenu) {
								if (!searchValue.trim()) return
								return fetchMovies()
							}
							setIsExpanded(true)
						}}>
						<Image src={SearchIcon} alt='search icon' draggable='false' className='min-w-[18px] sm:min-w-[22px]' />
					</motion.button>
				</label>
			</ConditionalWrapper>

			<SearchMenu
				setAllowPortal={setAllowPortal}
				searchResults={searchResults}
				isPending={isPending}
				show={showSearchMenu}
				handleClose={handleClose}
				finishedAnimating={finishedAnimating}
				setFinishedAnimating={setFinishedAnimating}
				labelRefElement={labelRefElement}
			/>
		</>
	)
}
