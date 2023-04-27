'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MovieList } from '../../types/types'
import { Button } from './Button'
import Slider from 'react-slick'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useState } from 'react'
import imagePrefix from '../assets/imagePrefix'

type Props = {
	data: MovieList
}

export const Hero = ({ data }: Props) => {
	const settings = {
		dots: true,
		speed: 800,
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 15000,
		slidesToShow: 1,
		slidesToScroll: 1,
		appendDots: (dots: any) => <ul>{dots}</ul>,
		customPaging: () => (
			<div className='inline-block cursor-pointer p-1'>
				<button className={`h-2 w-2 rounded-full bg-white/50`}></button>
			</div>
		),
		dotsClass: 'hero-slick-pagination relative z-10 -mt-24 flex items-center justify-center gap-1.5'
	}

	const [idk, setIdk] = useState(Array.from({ length: 20 }))

	const fetchMoreData = () => {
		console.log('next')
		setTimeout(() => {
			setIdk(idk.concat(Array.from({ length: 20 })))
		}, 1500)
	}

	return (
		<div className='flex w-full flex-col items-center'>
			<Slider {...settings} className='w-full'>
				{data.results.map(result => (
					<div key={result.id} className='relative flex flex-col justify-end overflow-hidden'>
						<div className='vignette-top absolute inset-0 z-0'></div>
						<div className='lg:vignette relative bottom-0 z-10 w-full py-44 lg:absolute'>
							<div className='wrapper'>
								<h2 className='mb-4 max-w-2xl font-montserrat text-5xl font-bold'>{result.title}</h2>
								<p className='mb-8 max-w-prose'>{result.overview}</p>

								<div className='flex items-center gap-4'>
									<Link href={`/watch/${result.id}`}>
										<Button>
											<Image src='/play-circle.svg' height={20} width={20} alt='Play movie' />
											<span>play</span>
										</Button>
									</Link>
									<Link href={`/movie/${result.id}`}>
										<Button secondary>more info</Button>
									</Link>
								</div>
							</div>
						</div>
						<div className='absolute top-0 left-0 -z-10 max-w-full lg:relative'>
							<Image
								src={imagePrefix + result.backdrop_path}
								alt={result.title}
								priority
								width={1920}
								height={1000}
								draggable='false'
								className='mx-auto max-h-[860px] w-full object-cover'
							/>
							<div className='vignette absolute inset-0'></div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	)
}
