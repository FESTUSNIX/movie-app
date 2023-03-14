import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
	return (
		<nav className='fixed top-0 left-0 z-50 w-full border-b border-emerald-700/50 bg-emerald-700/10 py-6 backdrop-blur-md'>
			<div className='wrapper flex items-center gap-12'>
				<Link href='/'>Home</Link>
				<Link href='/'>Movies</Link>
				<Link href='/'>Search</Link>
				<Link href='/'>Profile</Link>
			</div>
		</nav>
	)
}
