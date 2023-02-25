import Image from 'next/image'
import config from '../../app.config'

import Navigation from '../navigation'

const Header = () => {
	const { image, name } = config.siteMetadata
	return (
		<header
			className='flex flex-col items-center justify-center gap-4 p-8'
			data-testid='header'>
			<Image
				src={image}
				height='98'
				width='98'
				priority
				data-testid='image'
				alt='Brand image'
			/>
			<h3
				className='font-mono text-2xl'
				data-testid='name'>
				{name}
			</h3>
			<Navigation />
		</header>
	)
}

export default Header
