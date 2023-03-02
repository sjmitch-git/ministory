// set default app config
const name = 'Micro Story'
const title = 'Create a short story'
const description = 'Create a short story using the latest in AI technology.'

const config = {
	siteMetadata: {
		name: name,
		title: title,
		titleTemplate: `%s · ${title}`,
		description: description,
		url: 'https://microstory.vercel.app',
		githubRepo: 'https://github.com/sjmitch-git/ministory',
		author: process.env.NEXT_PUBLIC_AUTHOR_NAME || 'Stephen',
		authorUrl: process.env.NEXT_PUBLIC_AUTHOR_URL || 'https://mitch.gatsbyjs.io/',
		authorTwitter: process.env.NEXT_PUBLIC_AUTHOR_TWITTER || 'yourTwitterHandle',
		image: '/brand.png',
		siteLanguage: `en`,
		keywords: ['OpenAI', 'Story Generator', 'AI Technology', 'TailwindCSS', 'jsx', 'Next.js', 'ReactJS', 'Jest'],
	},
	siteLinks: [
		{
			href: '/',
			label: 'Create',
		},
		{
			href: '/saved',
			label: 'Saved',
		},
	],
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
