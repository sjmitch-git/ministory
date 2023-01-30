import { Html, Head, Main, NextScript } from 'next/document'

import config from '../app.config'

export default function Document() {
	const { author } = config.siteMetadata
	return (
		<Html lang='en'>
			<Head>
				{/* Global Site Tag (gtag.js) - Google Analytics */}
				<script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}></script>
				{/* prettier-ignore */}
				<script
					dangerouslySetInnerHTML={{
						__html: `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments)}
                        gtag('js', new Date());

                        gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});`,
					}}
				/>
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
				<link
					rel='apple-touch-icon'
					sizes='57x57'
					href='/apple-icon-57x57.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='60x60'
					href='/apple-icon-60x60.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='72x72'
					href='/apple-icon-72x72.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='76x76'
					href='/apple-icon-76x76.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='114x114'
					href='/apple-icon-114x114.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='120x120'
					href='/apple-icon-120x120.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='144x144'
					href='/apple-icon-144x144.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='152x152'
					href='/apple-icon-152x152.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-icon-180x180.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='192x192'
					href='/android-icon-192x192.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='96x96'
					href='/favicon-96x96.png'
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
				<meta
					name='msapplication-TileColor'
					content='#ffffff'
				/>
				<meta
					name='msapplication-TileImage'
					content='/ms-icon-144x144.png'
				/>
				<meta
					name='theme-color'
					content='#ffffff'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
