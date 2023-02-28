import config from '../../app.config'
import Navigation from '../navigation'

import * as ga from '../../lib/ga'

const Footer = () => {
	const { author, description, authorUrl } = config.siteMetadata

	const sendEvent = () => ga.sendevent('External Link', { link: 'Blog' })

	return (
		<footer
			className='flex flex-col items-center justify-center gap-4 pb-8 md:p-8'
			data-testid='footer'>
			<Navigation />
			<hr className='mt-4 w-full md:max-w-3xl' />
			<p
				className='my-8 px-4 text-center md:text-xl'
				data-testid='description'>
				{description}
			</p>
			<p>
				Created by{' '}
				<a
					href={authorUrl}
					data-testid='link'
					rel='noreferrer'
					onClick={sendEvent}
					target='_blank'>
					{author}
				</a>
			</p>
		</footer>
	)
}

export default Footer
