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
						className='max-w-2xl text-center font-serif text-2xl md:text-3xl'
						key={index}>
						<span
							data-testid='data'
							className='tracking-widest'>
							{obj.data}
						</span>
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
