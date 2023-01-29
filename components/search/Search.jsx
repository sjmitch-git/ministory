import { useState, useContext } from 'react'

import GlobalContext from '../../contexts/globalContext'
import Loading from '../../components/loading'
import Error from '../../components/error'

const Search = () => {
	const [queryInput, setQueryInput] = useState('')
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const { results, setResults } = useContext(GlobalContext)

	const submitLabel = 'Generate emojis'
	const placeholder = 'Enter a movie title'

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

			setResults([...results, { data: data.result, label: queryInput }])
			setQueryInput('')
			setLoading(false)
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
				onSubmit={onSubmit}
				className='mb-16 flex flex-col items-center rounded bg-slate-100 p-4'>
				<input
					type='text'
					name='query'
					className='rounded border border-cyan-500 p-2 text-xl focus:border-orange-500 focus:outline-none md:w-96'
					placeholder={placeholder}
					value={queryInput}
					autoComplete='off'
					onChange={(e) => setQueryInput(e.target.value)}
				/>
				<button
					type='submit'
					disabled={!queryInput.length}
					hidden={!queryInput.length}
					className='mt-6 w-full rounded bg-teal-400 p-3 text-center text-xl uppercase text-white disabled:bg-slate-400'>
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
