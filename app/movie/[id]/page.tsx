import { formatMinutes } from '@/app/utils/formatMinutes'
import { getMovieDetails } from '@/lib/movie/getMovieDetails'
import { getMovieImages } from '@/lib/movie/getMovieImages'
import Image from 'next/image'
import { getSimilarMovies } from '@/lib/movie/getSimilarMovies'
import { Background, Button, MoviesSlider, ImageSlider, LightboxOpener } from '@/app/components'
import Link from 'next/link'
import { getMovieCredits } from '@/lib/movie/getMovieCredits'
import React from 'react'
import imagePrefix from '@/app/constants/imagePrefix'

type Props = {
	params: { id: number }
}

export async function generateMetadata({ params }: Props) {
	const movie = await getMovieDetails(params.id)
	const title = movie.title + ' | Novies'

	return { title }
}

const MovieDetails = async ({ params: { id } }: Props) => {
	const [images, details] = await Promise.all([getMovieImages(id), getMovieDetails(id)])
	const similiarMovies = await getSimilarMovies(id)
	const credits = await getMovieCredits(id)

	return (
		<div className='wrapper flex flex-col'>
			<div className='z-10 mb-16 flex h-full w-full grow'>
				<Background imagePath={details.backdrop_path} />

				<div className='wrapper grow pt-64'>
					<h1 aria-label={details.title} className='mb-2 font-montserrat'>
						{images.logos.length ? (
							<Image
								src={imagePrefix + images.logos[0].file_path}
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

						<Button secondary>
							<Image src='/bookmark.svg' height={20} width={20} alt='Save to watch list' />
							<span>save</span>
						</Button>
					</div>

					<h2 className='max-w-prose'>{details.overview}</h2>
				</div>
			</div>

			<div className='z-10 flex flex-col gap-12'>
				<ImageSlider>
					{images.posters.map((poster, index) => (
						<LightboxOpener key={poster.file_path} index={index} images={images.posters}>
							<Image
								key={poster.file_path}
								src={imagePrefix + poster.file_path}
								height={200}
								width={200}
								alt='Movie poster'
								className='flex aspect-[2/3] w-48 cursor-pointer flex-col items-center overflow-hidden rounded-xl bg-neutral-900'
							/>
						</LightboxOpener>
					))}
				</ImageSlider>

				<ImageSlider>
					{credits.cast.splice(0, 8).map(person => (
						<Link
							href={`/person/${person.id}`}
							key={person.id}
							className='flex w-48 flex-col items-center overflow-hidden rounded-xl bg-neutral-900'>
							<Image
								src={imagePrefix + person.profile_path}
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
				</ImageSlider>

				<MoviesSlider data={similiarMovies} title='We recommend' />
			</div>
		</div>
	)
}

export default MovieDetails
