import { getPopularMovies } from '@/lib/getPopularMovies'
import { Hero } from './components/Hero'

export default async function Home() {
	const popularMovies = await getPopularMovies(9)

	return (
		<div className='flex flex-col'>
			<Hero data={popularMovies} />
		</div>
	)
}
