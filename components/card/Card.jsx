import Link from 'next/link'

import { formatDate, camelCase } from '@smitch/js-lib'

import * as ga from '../../lib/ga'

const Card = ({ label, data, genre, date, removeFromStorage }) => {
	const sendEvent = () => ga.sendevent('Read', { label: label })

	return (
		<div className='relative mb-8 rounded-lg bg-white p-2 text-left shadow-lg md:p-4'>
			<h3 className='mb-2 text-2xl font-bold capitalize opacity-50 md:mb-4 md:text-3xl'>{label}</h3>
			<p className='mb-4 truncate md:text-xl'>{data}</p>
			<div className='mb-4 flex justify-between'>
				<p>#{camelCase(genre)}</p>
				<p className='text-right'>{formatDate(date, 'en-GB', 'dd/mm/yy')}</p>
			</div>
			<footer className='flex justify-between'>
				<button
					className='all-small-caps relative z-10 font-bold text-danger'
					onClick={() => removeFromStorage(date)}
					title='Remove from saved list?'>
					Remove
				</button>
				<Link
					href={`/${label}?data=${data}`}
					onClick={sendEvent}
					className='stretched-link all-small-caps font-bold'>
					Read
				</Link>
			</footer>
		</div>
	)
}

export default Card
