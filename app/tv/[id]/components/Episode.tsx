'use client'

import imagePrefix from '@/app/assets/imagePrefix'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Skeleton from 'react-loading-skeleton'
import { Episode as EpisodeType } from '@/types/TV'

type Props = {
	episode: EpisodeType
}

export const Episode = ({ episode }: Props) => {
	const [isLoadingImage, setIsLoadingImage] = useState(true)

	return (
		<motion.div
			key={episode.id}
			className='group relative w-full cursor-pointer duration-300 hover:scale-105'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}>
			<div className='relative mb-1 overflow-hidden rounded-xl border-2 border-transparent shadow-sm duration-300 hover:border-white'>
				{isLoadingImage && (
					<div className='mb-2 aspect-[41/23] h-auto w-full overflow-hidden rounded-xl'>
						<Skeleton height={'100%'} style={{ borderRadius: '12px' }} />
					</div>
				)}

				<div style={{ position: isLoadingImage ? 'absolute' : 'relative' }}>
					<Image
						src={imagePrefix + episode.still_path}
						alt={episode.name}
						width={700}
						height={500}
						onLoadingComplete={() => {
							setIsLoadingImage(false)
						}}
						className='aspect-[41/23] h-auto w-full'
					/>
				</div>
				<div className='absolute inset-0 bg-black/40 opacity-0 duration-300 ease-in-out group-hover:opacity-100'></div>
			</div>
			<div className='absolute'>
				<h3 className='text-sm font-semibold text-white/90'>
					{episode.episode_number}.&nbsp;{episode.name}
				</h3>

				<p
					className='flex items-center gap-2 overflow-hidden text-ellipsis pr-3 text-xs font-normal text-white/70'
					style={{
						display: '-webkit-box',
						lineClamp: 2,
						WebkitLineClamp: 2,
						WebkitBoxOrient: 'vertical'
					}}>
					{episode.overview}
				</p>
			</div>
		</motion.div>
	)
}
