import { useContext } from 'react'

import GlobalContext from '../../contexts/globalContext'

const Results = () => {
	const { results } = useContext(GlobalContext)

	return (
		<div
			className='mb-8 flex flex-col-reverse gap-16'
			id='results'
			data-testid='results'>
			{results &&
				results.map((obj, index) => (
					<div
						className='max-w-2xl px-4 text-2xl md:text-3xl'
						key={index}>
						<p
							className='py-6 text-2xl font-bold uppercase tracking-wide opacity-60'
							data-testid='label'>
							{obj.label}
						</p>
						<span
							data-testid='data'
							className='font-serif tracking-widest'>
							{obj.data}
						</span>
					</div>
				))}
		</div>
	)
}

export default Results
