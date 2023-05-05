import Badge from '@/app/components/elements/Badge'
import Image from 'next/image'
import React from 'react'
import StarIcon from '@/public/star.svg'
import { TVDetails } from '@/types/TV'

type Props = {
	details: TVDetails
}

const Badges = ({ details }: Props) => {
	return (
		<div className='mb-4 flex flex-wrap items-center gap-1 text-sm text-neutral-300'>
			<Badge>
				<h2>
					<span>{details.first_air_date.slice(0, 4)}</span>

					{details.first_air_date.slice(0, 4) !== details.last_air_date.slice(0, 4) && (
						<span>&nbsp;-&nbsp;{details.last_air_date.slice(0, 4)}</span>
					)}
				</h2>
			</Badge>
			<Badge>
				<h2>
					<span>{details.number_of_seasons} seasons</span>
				</h2>
			</Badge>
			<Badge>
				<h2 className='flex items-center gap-2'>
					<span>{details.vote_average.toFixed(1)}</span>
					<Image src={StarIcon} alt='stars' className='w-4' aria-label='stars' />
				</h2>
			</Badge>
			<Badge>
				<h2>
					{details.genres.map((genre, index) => (
						<span key={genre.id}>
							{genre.name}
							{details.genres.length - 1 !== index ? ', ' : ''}
						</span>
					))}
				</h2>
			</Badge>
		</div>
	)
}

export default Badges
