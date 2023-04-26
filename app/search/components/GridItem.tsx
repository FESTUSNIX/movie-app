import { SearchMultiResult } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import placeholderImage from '@/public/ef3-placeholder-image.jpg'

type Props = {
	result: SearchMultiResult
}

export const GridItem = ({ result }: Props) => {
	return (
		<Link
			href={`/movie/${result.id}`}
			className='group relative overflow-hidden rounded-xl border-2 border-transparent duration-500 hover:scale-105 hover:border-white'>
			<h4 className='absolute z-10 mx-2 my-2 overflow-hidden text-sm font-bold'>
				<span className='block -translate-y-full opacity-0 duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
					{'title' in result ? result.title : result.name}
				</span>
			</h4>

			<Image
				src={result.poster_path ? 'https://image.tmdb.org/t/p/original' + result.poster_path : placeholderImage}
				alt={'title' in result ? result.title : result.name}
				width={500}
				height={300}
				className='h-full w-full object-cover'
			/>

			<div className='absolute inset-0 bg-black/40 opacity-0 duration-300 ease-in-out group-hover:opacity-100'></div>
		</Link>
	)
}
