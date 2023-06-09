import { Lightbox, Navbar } from './components'
import { Montserrat, Open_Sans } from 'next/font/google'
import './globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { Footer } from './components/modules/Footer'
import { LightboxProvider } from './components/modules/Lightbox/context/LightboxContext'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat'
})

const openSans = Open_Sans({
	subsets: ['latin'],
	variable: '--font-open-sans'
})

export const metadata = {
	title: 'Novies',
	description: 'Your favourite pop-culture database'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className={`${montserrat.variable} ${openSans.variable}`}>
			<body>
				<LightboxProvider>
					<Navbar />
					<div className='z-0 flex min-h-screen flex-col'>{children}</div>
					<Footer />
					<Lightbox />
				</LightboxProvider>
			</body>
		</html>
	)
}
