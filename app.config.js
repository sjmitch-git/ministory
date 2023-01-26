// set default app config
const name = 'MoviMoji'
const title = 'Movie Titles to Emojis'
const description = 'Convert your favourite movie titles into emojis using the latest in AI technology!'

const config = {
	siteMetadata: {
		name: name,
        title: title,
		titleTemplate: `%s · ${title}`,
		description: description,
		githubRepo: 'https://github.com/sjmitch-git/movimoji',
		author: process.env.NEXT_PUBLIC_AUTHOR_NAME || 'Stephen',
		authorUrl: process.env.NEXT_PUBLIC_AUTHOR_URL || 'https://mitch.gatsbyjs.io/',
		authorTwitter: process.env.NEXT_PUBLIC_AUTHOR_TWITTER || 'yourTwitterHandle',
		image: '/brand.png',
		siteLanguage: `en`,
		keywords: [
            'OpenAI',
            'emojis',
            'AI Technology',
			'TailwindCSS',
			'jsx',
			'Next.js',
			'ReactJS',
			'Cypress',
		],
	},
	siteLinks: [],
	manifest_options: {
		name: `${title} - ${description}`,
		short_name: title,
		description: description,
		start_url: `/`,
		background_color: `#f9fafb`,
		theme_color: `#fafafa`,
		display: `standalone`,
		icon: '/brand.png',
	},
}

export default config
