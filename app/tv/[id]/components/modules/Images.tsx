import imagePrefix from '@/app/constants/imagePrefix'
import { getTVImages } from '@/lib/tv/getTVImages'
import Image from 'next/image'
import React from 'react'

type Props = {
	id: number
}

const Images = async ({ id }: Props) => {
	const images = await getTVImages(id)

	return (
		<div className='mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7'>
			{images.posters.splice(0, 6).map(image => (
				<Image src={imagePrefix + image.file_path} key={image.file_path} alt='image' width={700} height={700} />
			))}
		</div>
	)
}

export default Images
