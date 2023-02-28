import { useState, useContext, useEffect } from 'react'

import GlobalContext from '../../contexts/globalContext'

const Actions = () => {
	const { results } = useContext(GlobalContext)
	const [isSaved, setisSaved] = useState(false)

	useEffect(() => {
		setisSaved(false)
	}, [results])

	const saveStory = () => {
		let story = results[0]
		story.date = Date.now()
		let saved = JSON.parse(window.localStorage.getItem('ms.saved')) || []
		saved.push(story)
		window.localStorage.setItem('ms.saved', JSON.stringify(saved.reverse()))
		setisSaved(true)
	}
	return (
		<>
			{results.length > 0 && (
				<div className='grid'>
					<button
						disabled={isSaved}
						className='mt-2 w-full rounded bg-purple-600 p-3 text-center text-xl uppercase text-white disabled:bg-slate-400'
						onClick={() => saveStory()}>
						{isSaved ? 'Saved!' : 'Save'}
					</button>
				</div>
			)}
		</>
	)
}

export default Actions
