import Head from 'next/head'
import { useRouter } from 'next/router'
import config from '../../app.config'

const SEO = ({ title, description, keywords, img }) => {
	const { image, url } = config.siteMetadata
	const router = useRouter()
	const path = url + router.asPath
	const imgSrc = url + img

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
				content={imgSrc}
			/>
			<meta
				property='og:image'
				content={imgSrc}
			/>
			<meta
				property='og:image:secure_url'
				content={imgSrc}
			/>
			<meta
				name='twitter:image'
				content={imgSrc}
			/>
			<link
				rel='icon'
				href={image}
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
