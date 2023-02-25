import Header from '../header'
import Footer from '../footer'

export default function Layout({ children }) {
	return (
		<div
			className='grid min-h-screen grid-rows-[auto,_1fr,_auto] gap-4 bg-slate-100 bg-fixed text-slate-900'
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
