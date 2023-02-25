import { formatDate } from '@smitch/js-lib'

const Card = ({ label, data, genre, date }) => {
	return (
		<div className='mb-8 bg-white p-4 text-left'>
			<h3 className='mb-4 text-3xl capitalize'>{label}</h3>
			<p className='mb-4 text-2xl'>{data}</p>
			<p className='text-right'>{formatDate(date, 'en-GB', 'dd month yyyy')}</p>
		</div>
	)
}

export default Card
