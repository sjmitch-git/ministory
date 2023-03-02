import config from '../../app.config'
import Tab from '../tab'

const Tabs = () => {
	const { siteLinks } = config

	return (
		<ul className='tabs'>
			{siteLinks.map((item, index) => (
				<Tab
					href={item.href}
					label={item.label}
					key={index}
				/>
			))}
		</ul>
	)
}

export default Tabs
