import { useContext } from 'react'

import GlobalContext from '../../contexts/globalContext'

const Results = () => {
	const { results } = useContext(GlobalContext)

	return (
		<div
			className='mb-8 flex flex-col-reverse gap-16'
			data-testid='results'>
			{results &&
				results.map((obj, index) => (
					<div
						className='text-center text-4xl md:text-6xl'
						key={index}>
						<span data-testid='data'>{obj.data}</span>
						<p
							className='pt-6 text-2xl font-bold uppercase opacity-80'
							data-testid='label'>
							{obj.label}
						</p>
					</div>
				))}
		</div>
	)
}

export default Results
