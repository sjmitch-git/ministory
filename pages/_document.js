import { Html, Head, Main, NextScript } from 'next/document'

import config from '../app.config'

export default function Document() {
	const { author } = config.siteMetadata
	return (
		<Html lang='en'>
			<Head>
				<meta
					property='og:image:width'
					content='1200'
				/>
				<meta
					property='og:image:height'
					content='630'
				/>
				<meta
					name='twitter:image:width'
					content='1200'
				/>
				<meta
					name='twitter:image:height'
					content='630'
				/>
				<meta
					name='twitter:card'
					content='summary_large_image'
				/>
				<meta
					name='author'
					content={`${author}`}
				/>
				{/* <link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>
				<link
					rel='manifest'
					href='/manifest.json'
				/>
				<link
					rel='shortcut icon'
					href='/favicon.ico'
				/> */}
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
