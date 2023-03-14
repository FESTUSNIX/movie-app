import { getPopularMovies } from '@/lib/getPopularMovies'
import Image from 'next/image'
import { Hero } from './components/Hero'

export default async function Home() {
	const popularMovies = await getPopularMovies()

	return (
		<div>
			<Hero data={popularMovies} />
		</div>
	)
}
