import Head from 'next/head'
import { useRouter } from 'next/router'
import config from '../../app.config'

const SEO = ({ title, description, keywords, image }) => {
	const {siteMetadata} = config
	const {url} = siteMetadata
	const router = useRouter()
	const path = url + router.asPath

	return (
		<Head>
			<title>{title}</title>
			<meta
				property='og:title'
				content={title}
			/>
			<meta
				name='twitter:title'
				content={title}
			/>
			<meta
				name='description'
				content={description}
			/>
			<meta
				property='og:description'
				content={description}
			/>
			<meta
				name='twitter:description'
				content={description}
			/>
			<meta
				name='keywords'
				content={keywords}
			/>
			<meta
				name='image'
				content={image}
			/>
			<meta
				property='og:image'
				content={image}
			/>
			<meta
				property='og:image:secure_url'
				content={image}
			/>
			<meta
				name='twitter:image'
				content={image}
			/>
			<link
				href={path}
				rel='canonical'></link>
			<meta
				property='og:url'
				content={path}
			/>
			<meta
				name='twitter:url'
				content={path}
			/>
		</Head>
	)
}

export default SEO