'use client'

import React, { useState } from 'react'
import Hamburger from 'hamburger-react'

type Props = {}

export const SideMenu = ({}: Props) => {
	const [isOpen, setOpen] = useState(false)

	return (
		<div className='flex flex-col'>
			<div className='-ml-3 max-h-[46px] overflow-hidden'>
				<Hamburger toggled={isOpen} toggle={setOpen} size={22} label='Show menu' rounded />
			</div>
		</div>
	)
}
