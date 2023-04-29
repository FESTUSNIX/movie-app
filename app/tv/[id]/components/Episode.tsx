import imagePrefix from '@/app/assets/imagePrefix'
import { formatMinutes } from '@/app/utils/formatMinutes'
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
			<div className='relative mb-1 overflow-hidden rounded-xl border-2 border-transparent duration-300 hover:border-white'>
				<Image src={imagePrefix + episode.still_path} alt={episode.name} width={700} height={500} className='' />
				<div className='absolute inset-0 bg-black/40 opacity-0 duration-300 ease-in-out group-hover:opacity-100'></div>
			</div>
			<div className='absolute'>
				<div className='flex items-center text-sm font-semibold text-white/90'>
					<span>{episode.episode_number}.&nbsp;</span>
					<h3>{episode.name}</h3>
					<span className='font-normal'>&nbsp;&nbsp;•&nbsp;&nbsp;{formatMinutes(episode.runtime)}</span>
				</div>
				<p className='flex items-center gap-2 pr-3 text-xs font-normal text-white/70'>{episode.overview}</p>
			</div>
		</motion.div>
	)
}
