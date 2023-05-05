import React from 'react'
import Skeleton from 'react-loading-skeleton'

export const EpisodeSkeleton = () => {
	return (
		<div className='relative'>
			<div className='mb-2 aspect-[41/23] h-auto w-full overflow-hidden rounded-xl'>
				<Skeleton height={'100%'} style={{ borderRadius: '12px' }} />
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
