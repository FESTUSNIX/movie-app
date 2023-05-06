'use client'

import React, { useState } from 'react'
import { Cast } from './Cast'
import { Credits } from '@/types/Shared'
import Images from './Images'
import Slider from 'react-slick'

type Props = {
	children: React.ReactNode
}

type Tabs = ['notable cast', 'images', 'videos']

const AdditionalItems = ({ children }: Props) => {
	const [tab, setTab] = useState<'notable cast' | 'images' | 'videos'>('notable cast')

	const tabs: Tabs = ['notable cast', 'images', 'videos']

	return (
		<div className='mb-16'>
			<div className='mb-8 flex items-center gap-12 border-b-2 border-white/10'>
				{tabs.map(item => (
					<button key={item} onClick={() => setTab(item)} className='-ml-4 px-4 text-2xl capitalize'>
						<p
							className={`translate-y-[2px] border-b-2 pt-2 pb-4 duration-300  ${
								tab === item ? 'border-white text-white' : 'border-transparent text-neutral-200 hover:border-white/60'
							}`}>
							{item}
						</p>
					</button>
				))}
			</div>

			<div>{children}</div>
		</div>
	)
}

export default AdditionalItems
