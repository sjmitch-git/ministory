import { useState, useEffect, useContext } from 'react'

import Pagetitle from '../components/pagetitle'
import Pagination from '../components/pagination'
import SEO from '../components/seo'
import config from '../app.config'
import Card from '../components/card'
import GlobalContext from '../contexts/globalContext'
import { scrollTo } from '@smitch/js-lib'

export default function Saved() {
	const title = 'Saved'
	const { keywords, name, image, description } = config.siteMetadata

	const { saved, setSaved } = useContext(GlobalContext)

	const [currentPage, setCurrentPage] = useState(1)

	const paginate = (items, pageNumber, pageSize) => {
		const startIndex = (pageNumber - 1) * pageSize
		return items.slice(startIndex, startIndex + pageSize)
	}

	const onPageChange = (page) => {
		setCurrentPage(page)
		ga.sendevent('Pagination', { page: page })
		scrollTo('list')
	}

	const pageSize = 6

	useEffect(() => {
		setSaved(JSON.parse(window.localStorage.getItem('ms.saved')).reverse())
	}, [setSaved])

	const removeFromStorage = (date) => {
		let filtered = saved.filter(function (el) {
			return el.date !== date
		})
		window.localStorage.setItem('ms.saved', JSON.stringify(filtered.reverse()))
		setSaved(filtered.reverse())
		ga.sendevent('Remove Story', { date: date })
	}

	return (
		<>
			<SEO
				title={`${title} | ${name}`}
				description={description}
				keywords={keywords}
				img={image}
			/>
			<div
				className='flex flex-col items-center'
				id='list'>
				<Pagetitle title={title} />
				{/* <p>{description}</p> */}
				<div
					className='max-w-2xl'
					id='saved'>
					{saved &&
						paginate(saved, currentPage, pageSize).map((item, index) => (
							<Card
								label={item.label}
								data={item.data}
								genre={item.genre}
								date={item.date}
								key={index}
								removeFromStorage={removeFromStorage}
							/>
						))}
				</div>
				<Pagination
					items={saved.length}
					currentPage={currentPage}
					pageSize={pageSize}
					onPageChange={onPageChange}
				/>
			</div>
		</>
	)
}
