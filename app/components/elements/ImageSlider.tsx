'use client'

import React from 'react'
import Slider from 'react-slick'

type Props = {
	children: React.ReactNode
	className?: string
	responsiveSettings?: {
		breakpoint: number
		settings: {
			slidesToShow: number
			slidesToScroll: number
		}
	}[]
}

export const ImageSlider = ({ children, className, responsiveSettings }: Props) => {
	const settings = {
		dots: false,
		speed: 500,
		infinite: false,
		slidesToShow: responsiveSettings?.[0].settings.slidesToShow || 7,
		slidesToScroll: responsiveSettings?.[0].settings.slidesToScroll || 7,
		responsive: responsiveSettings
			? responsiveSettings.slice(1)
			: [
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
							slidesToShow: 2,
							slidesToScroll: 2
						}
					}
			  ]
	}

	return (
		<Slider {...settings} className={`items-slider ${className}`}>
			{children}
		</Slider>
	)
}
