import { MovieDetails } from '@/app/types/types'
import { formatMinutes } from '@/app/utils/formatMinutes'
import { getMovieDetails } from '@/lib/getMovieDetails'
import { getMovieImages } from '@/lib/getMovieImages'
import Image from 'next/image'
import { Background } from './components/Background'

type Props = {
	params: { id: number }
}

const MovieDetails = async ({ params: { id } }: Props) => {
	const data: MovieDetails = await getMovieDetails(id)

	const images = await getMovieImages(id)

	return (
		<div className='flex min-h-screen flex-col'>
			<div className='z-10 flex h-full w-full grow pb-6'>
				<Background data={data} />

				<div className='wrapper grow pt-64'>
					<h1 aria-label={data.title} className='mb-6'>
						<Image
							src={'https://image.tmdb.org/t/p/original' + images.logos[0].file_path}
							alt={data.title}
							width={400}
							height={400}
							className='w-full min-w-[140px] max-w-xs'
						/>
					</h1>

					<div className='mb-4 flex gap-4'>
						<h3>{formatMinutes(data.runtime)}</h3>
						<h3>{data.vote_average.toFixed(1)}</h3>
					</div>
					<div className='mb-8 '>
						{data.genres.map((genre, index) => (
							<span key={genre.id}>
								{genre.name}
								{data.genres.length - 1 !== index ? ', ' : ''}
							</span>
						))}
					</div>

					<div className='mb-8 flex items-center gap-4'>
						<button className='flex items-center gap-2 rounded bg-emerald-600 px-10 py-4 font-bold uppercase'>
							<Image src='/play-circle.svg' height={20} width={20} alt='Play movie' />
							<span>play</span>
						</button>

						<button className='rounded bg-zinc-600 px-10 py-4 font-bold uppercase'>(add to favourites)</button>
					</div>

					<h2 className='max-w-prose'>{data.overview}</h2>
				</div>
			</div>
		</div>
	)
}

export default MovieDetails
