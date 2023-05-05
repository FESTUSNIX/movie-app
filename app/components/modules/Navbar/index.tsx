import Image from 'next/image'
import Link from 'next/link'
import { BrandLogo } from '@/app/components/elements/BrandLogo'
import SearchIcon from '@/public/search.svg'
import { Background } from './components/Background'
import { SideMenu } from './components/SideMenu'

export const Navbar = () => {
	return (
		<nav className='fixed top-0 left-0 z-50 w-full py-4'>
			<Background />
			<div className='wrapper relative flex items-center justify-between'>
				<SideMenu />

				<div className='h-12 shrink grow basis-0'>
					<div className='pointer-events-none absolute right-0 left-0 flex items-center justify-center'>
						<Link href='/' className='pointer-events-auto w-20 sm:w-24'>
							<h1 aria-label='novies'>
								<BrandLogo fill='#fff' />
							</h1>
						</Link>
					</div>
				</div>

				<div className='flex items-center gap-2 md:gap-8'>
					<Link href={'/search'} className='p-2'>
						<Image src={SearchIcon} alt='search icon' draggable='false' />
					</Link>

					<Link href='/' className='block h-8 w-8 overflow-hidden rounded-full sm:h-9 sm:w-9'>
						<Image src='https://randomuser.me/api/portraits/lego/8.jpg' alt='profile picture' width={40} height={40} />
					</Link>
				</div>
			</div>
		</nav>
	)
}
