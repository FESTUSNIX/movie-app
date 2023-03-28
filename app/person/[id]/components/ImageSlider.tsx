'use client'

import { PersonImages } from '@/types/types'
import Image from 'next/image'
import Slider from 'react-slick'

type Props = {
	images: PersonImages
}

export const ImageSlider = ({ images }: Props) => {
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
		<Slider {...settings} className='items-slider'>
			{images.profiles.map(profile => (
				<div key={profile.file_path} className='w-full min-w-[140px] max-w-xs'>
					<Image
						src={'https://image.tmdb.org/t/p/original' + profile.file_path}
						height={300}
						width={200}
						alt={`Persons photo`}
						className='aspect-[2/3] rounded'
					/>
				</div>
			))}
		</Slider>
	)
}
