import { getMovieDetails } from '@/lib/getMovieDetails'
import { getPersonDetails } from '@/lib/getPersonDetails'
import { getPersonImages } from '@/lib/getPersonImages'
import Image from 'next/image'
import { ImageSlider } from './components/ImageSlider'

type Props = {
	params: { id: number }
}

export async function generateMetadata({ params }: Props) {
	const movie = await getMovieDetails(params.id)
	const title = movie.title + ' | Novies'

	return { title }
}

const MovieDetails = async ({ params: { id } }: Props) => {
	const personDetails = await getPersonDetails(id)
	const personImages = await getPersonImages(id)

	return (
		<div className='wrapper flex flex-col pt-16'>
			<div className='mx-auto'>
				<div key={personDetails.id} className='flex flex-col items-center overflow-hidden'>
					<Image
						src={'https://image.tmdb.org/t/p/original' + personDetails.profile_path}
						height={200}
						width={200}
						alt={personDetails.name}
						className=''
					/>

					<p>id: {personDetails.id}</p>
					<p>name: {personDetails.name}</p>
					<p>birthday: {personDetails.birthday}</p>
					<p>also known as: {personDetails.also_known_as}</p>
					<p>homepage: {personDetails.homepage}</p>
					<p>department: {personDetails.known_for_department}</p>
					<p>place of birth: {personDetails.place_of_birth}</p>
					<p>popularity: {personDetails.popularity}</p>
					<br />
					<br />
					<br />
					<p>biography: {personDetails.biography}</p>
				</div>
			</div>

			<ImageSlider images={personImages} />
		</div>
	)
}

export default MovieDetails
