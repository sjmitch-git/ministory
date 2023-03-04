import { useContext } from 'react'

import GlobalContext from '../../contexts/globalContext'
import Story from '../../components/story'

const Results = () => {
	const { results } = useContext(GlobalContext)

	return (
		<div
			className='mb-8 flex flex-col-reverse gap-16'
			id='results'
			data-testid='results'>
			{results &&
				results.map((obj, index) => (
					<Story
						label={obj.label}
						data={obj.data}
						key={index}
					/>
				))}
		</div>
	)
}

export default Results
