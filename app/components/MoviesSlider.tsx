'use client'

import { MovieList } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'
import Slider from 'react-slick'

type Props = {
	data: MovieList
	title?: string | React.ReactNode
}

export const MoviesSlider = ({ data, title }: Props) => {
	const settings = {
		dots: false,
		speed: 500,
		infinite: false,
		slidesToShow: 7,
		slidesToScroll: 7,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 6
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 370,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	}

	return (
		<div className='items-slider my-8'>
			<h3 className='mb-3 font-montserrat text-xl font-semibold'>{title}</h3>

			<Slider {...settings} className='items-start justify-start'>
				{data.results.map(movie => (
					<Link
						href={`/movie/${movie.id}`}
						key={movie.id}
						draggable='false'
						className='group relative w-full min-w-[140px] max-w-xs cursor-pointer overflow-hidden rounded border-2 border-transparent duration-300 hover:scale-105 hover:border-white'>
						<h4 className='absolute z-10 mx-2 my-2 overflow-hidden text-sm font-bold'>
							<span className='block -translate-y-full opacity-0 duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
								{movie.title}
							</span>
						</h4>
						<Image
							src={'https://image.tmdb.org/t/p/original' + movie.poster_path}
							alt={movie.title}
							width={300}
							height={300}
							className='aspect-[2/3] rounded duration-300'
						/>
						<div className='absolute inset-0 bg-black/40 opacity-0 duration-300 ease-in-out group-hover:opacity-100'></div>
					</Link>
				))}
			</Slider>
		</div>
	)
}
