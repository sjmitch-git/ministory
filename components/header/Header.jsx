import config from '../../app.config'

const Header = () => {
	const { image, name } = config.siteMetadata
	return (
		<header className='flex flex-col items-center justify-center gap-4 p-8'>
            <img
				src={image}
				className='w-[98px]'
			/>
            <h3 className='font-mono text-2xl'>{name}</h3>
		</header>
	)
}

export default Header