import config from '../../app.config'

const Footer = () => {
	const { author, description, authorUrl } = config.siteMetadata
	return (
		<footer className='flex flex-col items-center justify-center gap-4 p-8'>
			<hr className='w-full md:w-6/12' />
            <p className='my-8 px-4 text-xl'>{description}</p>
            <p>
                Created by{' '}
                <a
                    href={authorUrl}
                    target='_blank'>
                    {author}
                </a>
            </p>
		</footer>
	)
}

export default Footer