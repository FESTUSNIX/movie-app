import imagePrefix from '@/app/constants/imagePrefix'
import { getTVCredits } from '@/lib/tv/getTVCredits'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
	id: number
}

export const Cast = async ({ id }: Props) => {
	const credits = await getTVCredits(id)

	return (
		<div className='grid grid-cols-2 gap-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8'>
			{credits.cast.splice(0, 7).map(person => (
				<Link
					href={`/person/${person.id}`}
					key={person.id}
					className='flex flex-col items-center gap-2 rounded-xl bg-white/5 p-4 backdrop-blur-sm duration-300 hover:bg-white/10 '>
					<Image
						src={imagePrefix + person.profile_path}
						alt={person.name}
						width={100}
						height={100}
						draggable={false}
						className='aspect-square w-20 rounded-full object-cover'
					/>
					<p className='text-center text-sm text-neutral-200'>{person.name}</p>
				</Link>
			))}
			<Link
				href={`/tv/${id}/cast`}
				className='grid cursor-pointer place-items-center rounded-xl bg-white/5 p-4 text-xl uppercase text-neutral-400 backdrop-blur-sm duration-300 hover:bg-white/10'>
				view more...
			</Link>
		</div>
	)
}
