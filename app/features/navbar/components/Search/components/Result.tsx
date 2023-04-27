'use client'

import { BasicMovieDetails, MovieDetails } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import starIcon from '@/public/star.svg'
import placeholderImage from '@/public/ef3-placeholder-image.jpg'
import { MotionConfig, motion } from 'framer-motion'
import { formatMinutes } from '@/app/utils/formatMinutes'
import imagePrefix from '@/app/assets/imagePrefix'

type Props = {
	result: BasicMovieDetails
}

const titleMotion = {
	rest: {
		scale: 1
	},
	hover: {
		scale: 1.1
	}
}

const genresMotion = {
	rest: {
		opacity: 0,
		y: '100%',
		height: 0
	},
	hover: {
		opacity: 1,
		y: 0,
		height: 'auto'
	}
}

const titleContainerMotion = {
	rest: {
		padding: '2.5rem 0 2.5rem'
	},
	hover: {
		padding: '1rem 0 2.5rem'
	}
}
const bottomMotion = {
	rest: {
		opacity: 0,
		height: 0
	},
	hover: {
		opacity: 1,
		height: 'auto'
	}
}

export const SearchResult = ({ result }: Props) => {
	const [details, setDetails] = useState<MovieDetails>()

	useEffect(() => {
		const fetchMovies = async () => {
			const res = await fetch(`/api/movieDetails/${result.id}`)
			const data: MovieDetails = await res.json()

			setDetails(data)
		}

		fetchMovies()
	}, [])

	return (
		<Link href={`/movie/${result.id}`} className='group relative w-full shrink-0 overflow-hidden'>
			<MotionConfig transition={{ ease: 'easeInOut', duration: 0.5 }}>
				<motion.div
					className='image-cover relative z-10 flex flex-col px-6 duration-300'
					initial='rest'
					whileHover='hover'
					animate='rest'>
					<motion.div className='flex items-center justify-between' layout variants={titleContainerMotion}>
						<div className='flex flex-col overflow-hidden'>
							<motion.h3 className='mr-[4em] origin-left text-base md:text-2xl' variants={titleMotion}>
								{result.title}
							</motion.h3>

							<motion.div layout variants={genresMotion}>
								{details?.genres.slice(0, 3).map((genre, index) => (
									<span key={genre.id} className='text-sm text-white/75'>
										{(index ? ', ' : '') + genre.name}
									</span>
								))}
							</motion.div>
						</div>
						<div className='flex shrink-0 items-center gap-2'>
							<span className='text-lg'>{result.vote_average.toFixed(1)}</span>
							<Image src={starIcon} alt='' />
						</div>
					</motion.div>

					<motion.div layout variants={bottomMotion} className='-translate-y-4 text-white/90'>
						<span>{result.release_date.slice(0, 4)} | </span>
						<span>{formatMinutes(details?.runtime!)}</span>
						{result?.adult && <span> | 18+</span>}
					</motion.div>
				</motion.div>

				<Image
					src={result.backdrop_path ? imagePrefix + result.backdrop_path : placeholderImage}
					alt={result.title ?? 'Movie'}
					width={500}
					height={300}
					className='absolute top-1/2 z-0 max-h-36 min-h-full w-full -translate-y-1/2 object-cover duration-300'
				/>
			</MotionConfig>
		</Link>
	)
}
