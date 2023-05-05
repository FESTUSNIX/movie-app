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
		<div className='flex items-center gap-4 py-8'>
			{credits.cast.map(person => (
				<Link href={`/person/${person.id}`} key={person.id} className='flex flex-col items-center gap-2 p-4 first:pl-0'>
					<Image
						src={imagePrefix + person.profile_path}
						alt={person.name}
						width={100}
						height={100}
						className='aspect-square w-20 rounded-full object-cover'
					/>
					<p className='text-sm text-neutral-200'>{person.name}</p>
				</Link>
			))}
		</div>
	)
}
