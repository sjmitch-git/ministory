import Link from 'next/link'

import { useState, useContext, useEffect } from 'react'

import GlobalContext from '../../contexts/globalContext'

import Loading from '../loading'

import * as ga from '../../lib/ga'

const Actions = () => {
	const { results } = useContext(GlobalContext)
	const [isSaved, setisSaved] = useState(false)
	const [link, setLink] = useState('')
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setisSaved(false)
		setLink('')
	}, [results])

	const sendEvent = () => ga.sendevent('Read Saved', { link: link })

	const saveStory = () => {
		let story = results[0]
		story.date = Date.now()
		let saved = JSON.parse(window.localStorage.getItem('ms.saved')) || []
		saved.unshift(story)
		window.localStorage.setItem('ms.saved', JSON.stringify(saved))
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
			setisSaved(true)
			setLink(`/${story.label}?data=${story.data}`)
		}, 800)
		ga.sendevent('Save Story', { story: story.label })
	}
	return (
		<>
			{results.length > 0 && (
				<div className='mb-8 grid'>
					{!link && (
						<button
							disabled={isSaved}
							className='btn-primary mt-2 w-20'
							onClick={() => saveStory()}>
							{loading ? (
								<div className='mx-auto w-[28px]'>
									<Loading />
								</div>
							) : (
								'Save'
							)}
						</button>
					)}
					{link && (
						<div>
							<Link
								href={link}
								onClick={sendEvent}
								className='btn font-bold uppercase'>
								Link: {results[0].label}
							</Link>
						</div>
					)}
				</div>
			)}
		</>
	)
}

export default Actions
