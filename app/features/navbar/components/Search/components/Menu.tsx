'use client'

import React, { useEffect } from 'react'
import { MovieList } from '@/types/types'
import Link from 'next/link'
import OutsideClickHandler from 'react-outside-click-handler'
import { motion, AnimatePresence } from 'framer-motion'
import { SearchResult } from './Result'
import { usePathname, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import IconClose from '@/public/x.svg'

type Props = {
	searchResults: (MovieList & { searchValue: string }) | null
	isPending: boolean
	show: boolean
	handleClose: () => void
	setAllowPortal: React.Dispatch<React.SetStateAction<boolean>>
	finishedAnimating: boolean
	setFinishedAnimating: React.Dispatch<React.SetStateAction<boolean>>
	labelRefElement: React.RefObject<HTMLLabelElement>
}

export const SearchMenu = ({
	searchResults,
	isPending,
	show,
	handleClose,
	setAllowPortal,
	finishedAnimating,
	setFinishedAnimating,
	labelRefElement
}: Props) => {
	const menu = {
		init: { x: '100%', transition: { ease: 'easeInOut', duration: 0.5 } },
		visible: { x: '0', transition: { ease: 'easeInOut', duration: 0.5 } },
		exit: { x: '100%', transition: { ease: 'easeInOut', duration: 0.5 } }
	}

	const backdrop = {
		init: { opacity: 0, transition: { ease: 'easeInOut', duration: 0.4 } },
		visible: { opacity: 1, transition: { ease: 'easeInOut', duration: 0.4 } },
		exit: { opacity: 0, transition: { ease: 'easeInOut', duration: 0.4 } }
	}

	const pathname = usePathname()
	const searchParams = useSearchParams()

	useEffect(() => {
		handleClose()
	}, [pathname, searchParams])

	useEffect(() => {
		if (!show) {
			setAllowPortal(false)
			return setFinishedAnimating(false)
		}

		if (finishedAnimating) {
			setTimeout(() => {
				setAllowPortal(show)
				setFinishedAnimating(false)
			}, 500)
		}
	}, [show, finishedAnimating])

	return (
		<AnimatePresence>
			{show && (
				<motion.div
					key='search-menu'
					variants={backdrop}
					initial='init'
					animate='visible'
					exit='exit'
					className='fixed inset-0 z-40 bg-black/50'>
					<OutsideClickHandler
						onOutsideClick={() => {
							handleClose()
						}}
						display='contents'>
						<motion.div
							variants={menu}
							initial='init'
							animate='visible'
							exit='exit'
							style={{ width: window.innerWidth - labelRefElement.current?.getBoundingClientRect().right! - 1 + 384 }}
							className='fixed top-0 right-0 flex h-full max-w-full flex-col bg-bg/20 shadow-2xl backdrop-blur-md'>
							<button className='absolute top-0 right-0 cursor-pointer p-4' onClick={() => handleClose()}>
								<Image src={IconClose} alt='close' />
							</button>

							<div className='mt-px flex flex-wrap justify-between py-4 px-4'>
								<div id='search-menu-label' className='flex max-w-full grow'></div>
							</div>

							{!searchResults && !isPending && <p className='mx-auto'>What are you looking for?</p>}
							{searchResults && !searchResults.total_results && (
								<p className='mx-auto'>We could not find anything related to {searchResults.searchValue}</p>
							)}
							{isPending && <p className='mx-auto'>Loading movies...</p>}
							{searchResults?.results && (
								<div className='custom-scrollbar overflow-y-overlay mt-4 flex grow flex-col'>
									{searchResults?.results.slice(0, 9).map(result => (
										<SearchResult key={result.id} result={result} />
									))}

									<Link href={`/search/SEARCH_VALUE`} className='relative w-full shrink-0 overflow-hidden'>
										<h3 className=' relative z-10 border-2 border-white/10  px-4 py-10 text-center text-xl font-bold uppercase'>
											See more
										</h3>
									</Link>
								</div>
							)}
						</motion.div>
					</OutsideClickHandler>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
