import imagePrefix from '@/app/constants/imagePrefix'
import { TVDetails } from '@/types/TV'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
	details: TVDetails
}

const Details = ({ details }: Props) => {
	return (
		<div className='relative -z-10 mt-32 w-full border-y border-white/5 bg-bg py-8'>
			<div className='vignette absolute top-0 left-0 right-0 h-36 -translate-y-full'></div>
			<div className='wrapper flex flex-wrap gap-0.5'>
				<div className='flex flex-col gap-4 rounded-xl bg-white/5 py-4 px-8 text-neutral-300 backdrop-blur-sm'>
					<div>
						<h3>First air date</h3>
						<p>{details.first_air_date}</p>
					</div>
					<div>
						<h3>Last air date</h3>
						<p>{details.last_air_date}</p>
					</div>
				</div>
				<div className='flex flex-col rounded-xl bg-white/5 py-4 px-8 text-neutral-300 backdrop-blur-sm'>
					<h3 className='mb-4'>Genres</h3>
					<div>
						{details.genres.map((genre, index) => (
							<p key={genre.id}>
								{genre.name}
								{details.genres.length - 1 !== index ? ', ' : ''}
							</p>
						))}
					</div>
				</div>
				<div className='flex flex-col rounded-xl bg-white/5 py-4 px-8 text-neutral-300 backdrop-blur-sm'>
					<h3 className='mb-4'>Homepage</h3>
					<Link href={details.homepage}>
						<p>Visit homepage</p>
					</Link>
				</div>
				<div className='flex flex-col rounded-xl bg-white/5 py-4 px-8 text-neutral-300 backdrop-blur-sm'>
					<h3 className='mb-4'>Status</h3>
					<p>{details.status}</p>
				</div>
				<div className='flex flex-col gap-2 rounded-xl bg-white/5 py-4 px-8 text-neutral-300 backdrop-blur-sm'>
					{details.networks.map(network => (
						<div key={network.id}>
							<Image
								src={imagePrefix + network.logo_path}
								alt={network.name}
								width={100}
								height={100}
								className='h-auto'
							/>
						</div>
					))}
				</div>
				<div className='flex flex-col rounded-xl bg-white/5 py-4 px-8 text-neutral-300 backdrop-blur-sm'>
					<p>{details.number_of_seasons} seasons</p>
					<p>{details.number_of_episodes} episodes</p>
				</div>
				<div className='flex flex-col rounded-xl bg-white/5 py-4 px-8 text-neutral-300 backdrop-blur-sm'>
					<h3 className='mb-4'>Rating</h3>
					<p>
						<b>{details.vote_average}</b>
						&nbsp;average out of&nbsp;
						<b>{details.vote_count}</b>
						&nbsp;votes
					</p>
				</div>
				<div className='flex flex-col rounded-xl bg-white/5 py-4 px-8 text-neutral-300 backdrop-blur-sm'>
					<h3 className='mb-4'>Created by</h3>
					<p>
						{details.created_by.map(person => (
							<div key={person.id}>{person.name}</div>
						))}
					</p>
				</div>
				<div className='flex flex-col rounded-xl bg-white/5 py-4 px-8 text-neutral-300 backdrop-blur-sm'>
					<h3 className='mb-4'>Origin country</h3>
					<p>{details.origin_country}</p>
				</div>
				<div className='flex flex-col rounded-xl bg-white/5 py-4 px-8 text-neutral-300 backdrop-blur-sm'>
					<h3 className='mb-4'>Type</h3>
					<p>{details.type}</p>
				</div>
			</div>
			<div className='vignette absolute bottom-0 left-0 right-0 h-36 translate-y-full rotate-180'></div>
		</div>
	)
}

export default Details
