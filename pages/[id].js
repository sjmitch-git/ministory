import SEO from '../components/seo'
import Story from '../components/story'
import Share from '../components/share'
import config from '../app.config'
import Pagetitle from '../components/pagetitle'

const Post = ({ query }) => {
	const { id, data } = query
	const { keywords, name, image } = config.siteMetadata

	return (
		<>
			<SEO
				title={`${id} | ${name}`}
				description={data}
				keywords={keywords}
				img={image}
			/>
			<div className='flex flex-col items-center'>
				<Pagetitle title={id} />
				<Story data={data} />
				<Share
					id={id}
					data={data}
				/>
			</div>
		</>
	)
}

export async function getServerSideProps({ query }) {
	return {
		props: {
			query: query,
		},
	}
}

export default Post
