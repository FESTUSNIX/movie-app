import { formatMinutes } from '@/app/utils/formatMinutes'
import { getMovieDetails } from '@/lib/getMovieDetails'
import { getMovieImages } from '@/lib/getMovieImages'
import Image from 'next/image'
import { Background } from './components/Background'
import { getPopularMovies } from '@/lib/getPopularMovies'
import { getSimilar } from '@/lib/getSimilar'
import { MoviesSlider } from '../../components/MoviesSlider'
import { Button } from '@/app/components'
import Link from 'next/link'
import { getMovieCredits } from '@/lib/getMovieCredits'

type Props = {
	params: { id: number }
}

export async function generateMetadata({ params }: Props) {
	const movie = await getMovieDetails(params.id)
	const title = movie.title + ' | Novies'

	return { title }
}

const MovieDetails = async ({ params: { id } }: Props) => {
	const images = await getMovieImages(id)
	const details = await getMovieDetails(id)
	const similiarMovies = await getSimilar(id)
	const credits = await getMovieCredits(id)

	return (
		<div className='flex min-h-screen flex-col'>
			<div className='z-10 mb-16 flex h-full w-full grow'>
				<Background data={details} />

				<div className='wrapper grow pt-64'>
					<h1 aria-label={details.title} className='mb-2 font-montserrat'>
						{images.logos.length ? (
							<Image
								src={'https://image.tmdb.org/t/p/original' + images.logos[0].file_path}
								alt={details.title}
								width={400}
								height={400}
								className='w-full min-w-[140px] max-w-sm'
							/>
						) : (
							<span className='block max-w-6xl text-6xl font-bold'>{details.title}</span>
						)}
					</h1>

					<div className='mb-4 flex gap-4 text-gray-200'>
						<h3 className='uppercase'>{formatMinutes(details.runtime)}</h3>
						<h3>{details.vote_average.toFixed(1)}</h3>
					</div>
					<div className='mb-8 '>
						{details.genres.map((genre, index) => (
							<span key={genre.id}>
								{genre.name}
								{details.genres.length - 1 !== index ? ', ' : ''}
							</span>
						))}
					</div>

					<div className='mb-8 flex items-center gap-4'>
						<Link href={`watch/${id}`}>
							<Button>
								<Image src='/play-circle.svg' height={20} width={20} alt='Play movie' />
								<span>play</span>
							</Button>
						</Link>

						<Button secondary>(add to favourites)</Button>
					</div>

					<h2 className='max-w-prose'>{details.overview}</h2>
				</div>
			</div>

			<div className='wrapper z-10'>
				<MoviesSlider data={similiarMovies} title='More like this' />

				<h3>Popular cast</h3>

				<div className='flex gap-4'>
					{credits.cast.splice(0, 8).map(person => (
						<Link
							href={`/person/${person.id}`}
							key={person.id}
							className='flex w-48 flex-col items-center overflow-hidden rounded bg-neutral-900'>
							<Image
								src={'https://image.tmdb.org/t/p/original' + person.profile_path}
								height={200}
								width={200}
								alt={person.name}
								className='w-full'
							/>
							<div className='p-4 text-center'>
								<p>{person.name}</p>
								<p className='text-sm text-white/60'>{person.character}</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

export default MovieDetails
