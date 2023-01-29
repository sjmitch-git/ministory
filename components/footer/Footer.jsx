import config from '../../app.config'

const Footer = () => {
	const { author, description, authorUrl } = config.siteMetadata
	return (
		<footer className='flex flex-col items-center justify-center gap-4 pb-8 md:p-8'>
			<hr className='w-full md:w-6/12' />
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
					target='_blank'>
					{author}
				</a>
			</p>
		</footer>
	)
}

export default Footer
