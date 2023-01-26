import Header from '../header'
import Footer from '../footer'

export default function Layout({ children }) {
	return (
		<div className='grid min-h-screen grid-rows-[auto,_1fr,_auto] gap-4'>
			<Header />
			<main className='relative p-2 md:p-4'>
				<article className='mx-auto w-full lg:max-w-6xl'>{children}</article>
			</main>
			<Footer />
		</div>
	)
}