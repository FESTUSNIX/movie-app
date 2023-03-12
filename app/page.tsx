import { Hero } from './components'

export default function Home() {
	return (
		<div>
			{/* @ts-expect-error Server Component */}
			<Hero />
		</div>
	)
}
