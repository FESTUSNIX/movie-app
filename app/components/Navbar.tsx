'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BrandLogo } from './BrandLogo'
import SearchIcon from '../../public/search.svg'
import { useScrollPosition } from '../hooks/useScrollPosition'

export const Navbar = () => {
	const scrollPosition = useScrollPosition()

	return (
		<nav
			className={`fixed top-0 left-0 z-50 w-full py-6 transition-colors duration-700 ${
				scrollPosition > 100 ? 'bg-bg/40 backdrop-blur-md' : ''
			}`}>
			<ul className='wrapper flex items-center justify-between'>
				<div className='flex items-center gap-8'>
					<li className='text-xl font-bold text-emerald-400'>
						<Link href='/'>
							<h1 aria-label='novies'>
								<BrandLogo fill='#fff' />
							</h1>
						</Link>
					</li>
				</div>
				<div className='flex items-center gap-8'>
					<li>
						<label className='flex cursor-text items-center gap-2.5 rounded-2xl border border-white/5 bg-bg/25 py-2.5 px-4 backdrop-blur-lg duration-300 focus-within:border-white/30 active:border-white/20'>
							<input type='text' className='bg-transparent outline-none' placeholder='Search for a movie' />
							<span className='select-none'>
								<Image src={SearchIcon} alt='search icon' draggable='false' width={20} />
							</span>
						</label>
					</li>
					<li>
						<Link href='/' className='block h-10 w-10 overflow-hidden rounded-full'>
							<Image
								src='https://randomuser.me/api/portraits/lego/8.jpg'
								alt='profile picture'
								width={40}
								height={40}
							/>
						</Link>
					</li>
				</div>
			</ul>
		</nav>
	)
}
