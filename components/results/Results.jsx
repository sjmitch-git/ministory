import { useContext } from 'react'

import GlobalContext from '../../contexts/globalContext'

const Results = () => {
	const { results } = useContext(GlobalContext)

	return (
		<div className='mb-8 flex flex-col-reverse gap-16'>
			{results.map((obj, index) => (
				<div
					className='text-center text-4xl md:text-6xl'
					key={index}>
					{obj.data}
					<p className='pt-6 text-2xl font-bold uppercase opacity-80'>{obj.label}</p>
				</div>
			))}
		</div>
	)
}

export default Results
