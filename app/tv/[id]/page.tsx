import { Background, Button } from '@/app/components'
import { getTVDetails } from '@/lib/tv/getTVDetails'
import React from 'react'
import { SeasonPicker } from './components/SeasonPicker'
import Image from 'next/image'
import Link from 'next/link'
import imagePrefix from '@/app/assets/imagePrefix'
import { getTVImages } from '@/lib/tv/getTVImages'
import { getTVVideos } from '@/lib/tv/getTVVideos'
import { getTVCredits } from '@/lib/tv/getTVCredits'
import Badges from './components/Badges'
import Details from './components/Details'

type Props = {
	params: { id: number }
}

export async function generateMetadata({ params }: Props) {
	const details = await getTVDetails(params.id)
	const title = details.name + ' | Novies'

	return { title }
}

const Tv = async ({ params: { id } }: Props) => {
	const details = await getTVDetails(id)
	const images = await getTVImages(id)
	const videos = await getTVVideos(id)
	const credits = await getTVCredits(id)

	return (
		<div className='nav-margin wrapper'>
			<Background imagePath={details.backdrop_path} />

			<h1 aria-label={details.name} className='mb-4 pt-40 font-montserrat'>
				{images.logos.length ? (
					<Image
						src={imagePrefix + images.logos[0].file_path}
						alt={details.name}
						width={400}
						height={400}
						className='max-h-48 w-full min-w-[140px] max-w-lg object-contain object-left'
					/>
				) : (
					<span className='block max-w-6xl text-6xl font-bold'>{details.name}</span>
				)}
			</h1>

			<Badges details={details} />

			<h3 className='mb-8 max-w-prose text-neutral-200'>{details.overview}</h3>

			<div className='mb-24 flex items-center gap-4'>
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

			<SeasonPicker details={details} id={id} />

			<Details details={details} />

			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />

			{credits.cast.map(person => (
				<div key={person.id}>
					<p>{person.name}</p>
					<Image
						src={imagePrefix + person.profile_path}
						alt={person.name}
						width={100}
						height={100}
						className='aspect-square w-20 rounded-full object-cover'
					/>
				</div>
			))}

			{videos.results.map(result => (
				<div key={result.id}>
					<p>{result.name}</p>
					<p>{result.site}</p>

					<iframe
						width='560'
						height='315'
						src={
							result.site === 'YouTube'
								? `https://www.youtube-nocookie.com/embed/${result.key}`
								: `https://player.vimeo.com/video/${result.key}`
						}
						title='YouTube video player'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowFullScreen></iframe>

					<br />
				</div>
			))}

			{/* <div className='mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7'>
				{images.posters.map(image => (
					<Image src={imagePrefix + image.file_path} key={image.file_path} alt='image' width={700} height={700} />
				))}
			</div>

			<br />
			<br />
			<br />
			<br />
			<br />
			<div className='mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7'>
				{images.backdrops.map(image => (
					<Image src={imagePrefix + image.file_path} key={image.file_path} alt='image' width={700} height={700} />
				))}
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />
			<div className='mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7'>
				{images.logos.map(image => (
					<Image src={imagePrefix + image.file_path} key={image.file_path} alt='image' width={700} height={700} />
				))}
			</div> */}
		</div>
	)
}
export default Tv
