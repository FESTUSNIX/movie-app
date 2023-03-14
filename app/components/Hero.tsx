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
		<div className='flex w-full flex-col items-center overflow-x-hidden'>
			<MotionSlider page={page} setPage={setPage} dataLength={data.results.length}>
				<div key={currentData.id} className='relative flex max-h-[1000px] flex-col justify-end'>
					<div className='vignette absolute bottom-0 z-10 w-full py-44 px-24'>
						<h2 className='mb-4 text-5xl font-bold'>{currentData.title}</h2>
						<p className='mb-8 max-w-prose'>{currentData.overview}</p>

						<div className='flex items-center gap-4'>
							<button className='flex items-center gap-2 rounded bg-emerald-600 px-10 py-4 font-bold uppercase'>
								<Image src='/play-circle.svg' height={20} width={20} alt='Play movie' />
								<span>play</span>
							</button>
							<Link href={`/movie/${currentData.id}`}>
								<button className='rounded bg-zinc-600 px-10 py-4 font-bold uppercase'>more info</button>
							</Link>
						</div>
					</div>
					<Image
						src={'https://image.tmdb.org/t/p/original' + currentData.backdrop_path}
						alt={currentData.title}
						priority
						width={1920}
						height={1000}
						draggable='false'
						className='z-0 w-full'
					/>
				</div>
			</MotionSlider>

			<div className='z-10 -mt-24 flex items-center gap-1.5'>
				{data.results.map((slide, index) => (
					<div key={slide.id} className='cursor-pointer p-1' onClick={() => setPage(index)}>
						<div className={`h-2 w-2 rounded-full bg-white/50 ${page === index ? 'priority:bg-white' : ''}`}></div>
					</div>
				))}
			</div>
		</div>
	)
}
