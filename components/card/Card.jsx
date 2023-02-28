import Link from 'next/link'

import { formatDate } from '@smitch/js-lib'

const Card = ({ label, data, genre, date, removeFromStorage }) => {
	return (
		<div className='relative mb-8 rounded-lg bg-white p-4 text-left shadow-lg'>
			<h3 className='mb-4 text-3xl font-bold capitalize opacity-50'>{label}</h3>
			<p className='mb-4 truncate text-2xl'>{data}</p>
			<div className='flex justify-between'>
				<p>#{genre}</p>
				<p className='text-right'>{formatDate(date, 'en-GB', 'dd month yyyy')}</p>
			</div>
			<footer className='flex justify-between'>
				<button
					className='relative z-10'
					onClick={() => removeFromStorage(date)}
					title='Remove from saved list'>
					remove
				</button>
				<Link
					href={`/${label}?data=${data}`}
					className='stretched-link'>
					read
				</Link>
			</footer>
		</div>
	)
}

export default Card
