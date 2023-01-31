import Header from '../header'
import Footer from '../footer'

export default function Layout({ children }) {
	return (
		<div
			className='grid min-h-screen grid-rows-[auto,_1fr,_auto] gap-4 bg-gradient-to-b from-slate-900 to-slate-700 bg-fixed text-slate-100'
			data-testid='layout'>
			<Header />
			<main
				className='relative p-2 md:p-4'
				data-testid='main'>
				<article
					className='mx-auto w-full lg:max-w-6xl'
					data-testid='article'>
					{children}
				</article>
			</main>
			<Footer />
		</div>
	)
}
