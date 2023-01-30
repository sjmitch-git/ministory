import { useState, useContext } from 'react'

import GlobalContext from '../../contexts/globalContext'
import Loading from '../../components/loading'
import Error from '../../components/error'

const Search = () => {
	const [queryInput, setQueryInput] = useState('')
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const { results, setResults } = useContext(GlobalContext)

	const submitLabel = 'Create!'
	const placeholder = 'Enter a topic for your story'

	const scrollTo = (id) => {
		let el = document.getElementById(id)
		el.scrollIntoView({ behavior: 'smooth' }, true)
	}

	async function onSubmit(event) {
		event.preventDefault()
		setError(false)
		setLoading(true)
		try {
			const response = await fetch('/api/generate', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ query: queryInput }),
			})

			const data = await response.json()
			if (response.status !== 200) {
				throw data.error || new Error(`Request failed with status ${response.status}`)
			}

			if (
				!data.result.endsWith('.') &&
				!data.result.endsWith('?') &&
				!data.result.endsWith(',') &&
				!data.result.endsWith('."')
			)
				data.result = data.result + '...'
			setResults([{ data: data.result, label: queryInput }])
			setQueryInput('')
			setLoading(false)
			setTimeout(() => {
				scrollTo('results')
			}, 200)
		} catch (error) {
			setError(error.message)
			setLoading(false)
		}
	}

	return (
		<>
			{error && (
				<div className='mb-8 w-full'>
					<Error message={error} />
				</div>
			)}
			<form
				id='searchform'
				onSubmit={onSubmit}
				className='mb-16 flex flex-col items-center rounded bg-slate-800 p-2'>
				<input
					type='text'
					name='query'
					className='rounded border border-purple-500 bg-black p-2 text-xl focus:border-cyan-500 focus:outline-none md:w-96'
					placeholder={placeholder}
					value={queryInput}
					autoComplete='off'
					data-testid='queryinput'
					onFocus={() => scrollTo('searchform')}
					onChange={(e) => setQueryInput(e.target.value)}
				/>
				<button
					type='submit'
					disabled={!queryInput.length}
					hidden={!queryInput.length}
					data-testid='button'
					className='mt-2 w-full rounded bg-purple-600 p-3 text-center text-xl uppercase text-white disabled:bg-slate-400'>
					{loading ? (
						<div className='mx-auto w-[28px]'>
							<Loading />
						</div>
					) : (
						<span>{submitLabel}</span>
					)}
				</button>
			</form>
		</>
	)
}

export default Search
