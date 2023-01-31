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
						className='max-w-3xl px-2 md:px-4 '
						key={index}>
						<p
							className='py-6 text-3xl font-bold uppercase tracking-wide opacity-60 md:text-4xl'
							data-testid='label'>
							{obj.label}
						</p>
						<span
							data-testid='data'
							className='font-mono text-lg tracking-widest opacity-80 md:text-xl lg:text-2xl'>
							{obj.data}
						</span>
					</div>
				))}
		</div>
	)
}

export default Results
