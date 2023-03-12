import { getPopularMovies } from '@/lib/getPopularMovies'
import { Movie } from './Movie'

export const Hero = async () => {
	const latestMovies = await getPopularMovies()

	return (
		<div className='w-full h-screen bg-stone-700 mb-10 flex'>
			{latestMovies.results.map((movie: any) => (
				<Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.backdrop_path} />
			))}
		</div>
	)
}
