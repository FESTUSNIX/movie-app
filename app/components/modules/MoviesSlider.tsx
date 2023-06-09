'use client'

import Image from 'next/image'
import Link from 'next/link'
import placeholderImage from '@/public/ef3-placeholder-image.jpg'
import imagePrefix from '@/app/constants/imagePrefix'
import { MovieList } from '@/types/Movies'
import { SectionHeading } from '../elements/SectionHeading'
import { ImageSlider } from '../elements/ImageSlider'

type Props = {
	data: MovieList
	title?: string | React.ReactNode
}

export const MoviesSlider = ({ data, title }: Props) => {
	return (
		<div className='my-8'>
			<SectionHeading>{title}</SectionHeading>

			<ImageSlider>
				{data.results.map(movie => (
					<Link
						href={`/movie/${movie.id}`}
						key={movie.id}
						draggable='false'
						className='group relative w-full min-w-[140px] max-w-xs cursor-pointer overflow-hidden rounded-xl border-2 border-transparent duration-300 hover:scale-105 hover:border-white'>
						<h4 className='absolute z-10 mx-2 my-2 overflow-hidden text-sm font-bold'>
							<span className='block -translate-y-full opacity-0 duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
								{movie.title}
							</span>
						</h4>
						<Image
							src={movie.poster_path ? imagePrefix + movie.poster_path : placeholderImage}
							alt={movie.title}
							width={300}
							height={300}
							className='aspect-[2/3] rounded-xl duration-300'
						/>
						<div className='absolute inset-0 bg-black/40 opacity-0 duration-300 ease-in-out group-hover:opacity-100'></div>
					</Link>
				))}
			</ImageSlider>
		</div>
	)
}
