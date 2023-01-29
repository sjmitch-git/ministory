import Search from '../components/search'
import Results from '../components/results'
import Pagetitle from '../components/pagetitle'
import SEO from '../components/seo'
import config from '../app.config'

export default function Home() {
	const { title, description, keywords, name, image } = config.siteMetadata

	return (
		<>
			<SEO
				title={`${title} | ${name}`}
				description={description}
				keywords={keywords}
				img={image}
			/>
			<div className='flex flex-col items-center'>
				<Pagetitle title={title} />
				<Search />
				<Results />
			</div>
		</>
	)
}
