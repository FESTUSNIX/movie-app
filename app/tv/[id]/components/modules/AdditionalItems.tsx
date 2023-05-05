'use client'

import React, { useState } from 'react'
import { Cast } from './Cast'
import { Credits } from '@/types/Shared'
import Images from './Images'

type Props = {
	children: React.ReactNode
}

type Tabs = ['cast', 'images', 'videos']

const AdditionalItems = ({ children }: Props) => {
	const [tab, setTab] = useState<'cast' | 'images' | 'videos'>('cast')

	const tabs: Tabs = ['cast', 'images', 'videos']

	return (
		<div className='mb-16'>
			<div className='flex items-center gap-16 border-b-2 border-white/10'>
				{tabs.map(item => (
					<button
						key={item}
						onClick={() => setTab(item)}
						className='border-b-2 border-transparent py-4 text-2xl capitalize text-neutral-200 duration-300 hover:border-white/60'>
						{item}
					</button>
				))}
			</div>

			<div>{children}</div>
		</div>
	)
}

export default AdditionalItems
