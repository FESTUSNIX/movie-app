import imagePrefix from '@/app/constants/imagePrefix'
import { getTVImages } from '@/lib/tv/getTVImages'
import { getTVVideos } from '@/lib/tv/getTVVideos'
import Image from 'next/image'
import React from 'react'

type Props = {
	id: number
}

const Videos = async ({ id }: Props) => {
	const videos = await getTVVideos(id)

	return (
		<div className='mt-16 flex flex-wrap items-center justify-between'>
			{videos.results.map(result => (
				<div key={result.id}>
					<p>{result.name}</p>

					<iframe
						width='560'
						height='315'
						src={
							result.site === 'YouTube'
								? `https://www.youtube-nocookie.com/embed/${result.key}`
								: `https://player.vimeo.com/video/${result.key}`
						}
						title='YouTube video player'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowFullScreen></iframe>

					<br />
				</div>
			))}
		</div>
	)
}

export default Videos
