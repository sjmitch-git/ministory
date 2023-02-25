import { useState, useEffect } from 'react'

import Pagetitle from '../components/pagetitle'
import SEO from '../components/seo'
import config from '../app.config'
import Card from '../components/card'

export default function Saved() {
	const title = 'Saved'
	const description = 'DESC text tbd'
	const { keywords, name, image } = config.siteMetadata

	const [saved, setSaved] = useState([])

	useEffect(() => {
		setSaved(JSON.parse(window.localStorage.getItem('ms.saved')))
	}, [])

	return (
		<>
			<SEO
				title={`${title} | ${name}`}
				description={description}
				keywords={keywords}
				img={image}
			/>
			<div className='flex flex-col items-center'>
				<Pagetitle title={title} />
				{/* <p>{description}</p> */}
				<div className='max-w-2xl'>
					{saved &&
						saved.map((item, index) => (
							<Card
								label={item.label}
								data={item.data}
								genre={item.genre}
								date={item.date}
								key={index}
							/>
						))}
				</div>
			</div>
		</>
	)
}
