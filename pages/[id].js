import { useRouter } from 'next/router'

import SEO from '../components/seo'
import Story from '../components/story'
import config from '../app.config'
import Pagetitle from '../components/pagetitle'

const Post = () => {
	const router = useRouter()
	const { id, data } = router.query
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
			</div>
		</>
	)
}

export default Post
