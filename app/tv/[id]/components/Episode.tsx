import imagePrefix from '@/app/assets/imagePrefix'
import { Episode as EpisodeType } from '@/types/types'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
	episode: EpisodeType
}

export const Episode = ({ episode }: Props) => {
	return (
		<motion.div
			key={episode.id}
			className='group relative w-full cursor-pointer duration-300 hover:scale-105'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.3 }}>
			<div className='relative mb-1 overflow-hidden rounded-xl border-2 border-transparent shadow-sm duration-300 hover:border-white'>
				<Image src={imagePrefix + episode.still_path} alt={episode.name} width={700} height={500} className='' />
				<div className='absolute inset-0 bg-black/40 opacity-0 duration-300 ease-in-out group-hover:opacity-100'></div>
			</div>
			<div className='absolute'>
				<h3 className='text-sm font-semibold text-white/90'>
					{episode.episode_number}.&nbsp;{episode.name}
				</h3>

				<p className='flex items-center gap-2 pr-3 text-xs font-normal text-white/70'>{episode.overview}</p>
			</div>
		</motion.div>
	)
}
