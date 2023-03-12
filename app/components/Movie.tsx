import Image from 'next/image'
import Link from 'next/link'

type Props = {
	id: number
	title: string
	poster_path: string
}

export const Movie = ({ id, title, poster_path }: Props) => {
	const imagePath = 'https://image.tmdb.org/t/p/original'

	return (
		<div className='relative w-full h-[800px] flex grow shrink-0'>
			<div className='flex flex-col relative z-10'>
				<h2 className='text-4xl font-bold'>{title}</h2>
			</div>

			<Link href={`/movie/${id}`} className='absolute top-0 z-0'>
				<Image src={imagePath + poster_path} alt={title} width={1600} height={900} className='w-full' />
			</Link>
		</div>
	)
}
