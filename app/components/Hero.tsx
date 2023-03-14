'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { PopularMovie } from '../types/types'
import { MotionSlider } from './MotionSlider'

export const Hero = ({ data }: { data: PopularMovie }) => {
	const [page, setPage] = useState(0)

	const currentData = data.results[page]

	return (
		<div className='w-full overflow-x-hidden'>
			<MotionSlider page={page} setPage={setPage} dataLength={data.results.length}>
				<div key={currentData.id} className='relative flex flex-col justify-end max-h-[1000px]'>
					<div className='px-24 py-44 z-10 vignette absolute bottom-0 w-full'>
						<h2 className='text-5xl font-bold mb-4'>{currentData.title}</h2>
						<p className='max-w-prose mb-8'>{currentData.overview}</p>

						<div className='flex items-center gap-4'>
							<button className='px-10 py-4 bg-emerald-600 uppercase rounded font-bold flex items-center gap-2'>
								<Image src='/play-circle.svg' height={20} width={20} alt='Play movie' />
								<span>play</span>
							</button>
							<Link href={`/movie/${currentData.id}`}>
								<button className='px-10 py-4 bg-zinc-600 uppercase rounded font-bold'>more info</button>
							</Link>
						</div>
					</div>
					<Image
						src={'https://image.tmdb.org/t/p/original' + currentData.backdrop_path}
						alt={currentData.title}
						width={1600}
						height={1000}
						draggable='false'
						className='w-full z-0'
					/>
				</div>
			</MotionSlider>
		</div>
	)
}
