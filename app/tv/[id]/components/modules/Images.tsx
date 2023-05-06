import { ImageSlider, LightboxOpener } from '@/app/components'
import imagePrefix from '@/app/constants/imagePrefix'
import { getTVImages } from '@/lib/tv/getTVImages'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
	id: number
}

const Images = async ({ id }: Props) => {
	const images = await getTVImages(id)

	const gridContainerStyles =
		'grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7'

	const categories: ['posters', 'backdrops', 'logos'] = ['posters', 'backdrops', 'logos']

	return (
		<div className='flex flex-col gap-4'>
			{/* <div className={gridContainerStyles}> */}
			{categories.map(category => (
				<ImageSlider key={category}>
					{images[category].slice(0, 5).map((image, index) => (
						<LightboxOpener key={image.file_path} index={index} images={images[category].slice(0, 6)}>
							<Image
								src={imagePrefix + image.file_path}
								alt={category}
								width={300}
								height={300}
								className='flex aspect-[2/3] w-48 cursor-pointer flex-col items-center overflow-hidden rounded-xl'
							/>
						</LightboxOpener>
					))}

					<Link
						href={`/tv/${id}/media/${category}`}
						className='aspect-[2/3] cursor-pointer rounded-xl bg-white/5 uppercase text-neutral-300 backdrop-blur-sm'>
						<span className='grid h-full w-full place-items-center'>view more...</span>
					</Link>
				</ImageSlider>
			))}

			{/* <div className={gridContainerStyles}>
				{images.backdrops.slice(0, 6).map(image => (
					<Image src={imagePrefix + image.file_path} key={image.file_path} alt='image' width={500} height={500} />
				))}
			</div>
			<div className={gridContainerStyles}>
				{images.logos.slice(0, 6).map(image => (
					<Image src={imagePrefix + image.file_path} key={image.file_path} alt='image' width={500} height={500} />
				))}
			</div> */}
		</div>
	)
}

export default Images
