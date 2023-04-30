import React from 'react'
import Skeleton from 'react-loading-skeleton'

export const EpisodeSkeleton = () => {
	return (
		<div className='relative'>
			<div className='mb-2 h-40'>
				<Skeleton height={'100%'} />
			</div>

			<div className='absolute w-full'>
				<p className='text-sm'>
					<Skeleton />
				</p>

				<p className='text-xs'>
					<Skeleton count={2} />
				</p>
			</div>
		</div>
	)
}
