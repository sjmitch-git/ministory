import Head from 'next/head'

import Search from '../components/search'
import Results from '../components/results'
import config from '../app.config'

export default function Home() {
	const {siteMetadata} = config
	const {title, description, keywords, name, image} = siteMetadata

console.log(config)

	return (
		<div>
			<Head>
				<title>{title} | {name}</title>
				<meta
					name='description'
					content={description}
				/>
				<meta
					name='keywords'
					content={keywords}
				/>
				<link
					rel='icon'
					href={image}
				/>
			</Head>

			<div className='flex flex-col items-center'>
	
				<h1 className='text-2xl md:text-4xl my-12 opacity-80 font-bold text-center'>{title}</h1>
				<Search />
				<Results />
			</div>
		</div>
	)
}
