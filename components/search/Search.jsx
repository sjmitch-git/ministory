import { useState, useContext, useRef } from 'react'

import { scrollTo } from '@smitch/js-lib'

import GlobalContext from '../../contexts/globalContext'
import Loading from '../../components/loading'
import Error from '../../components/error'
import GenresService from '../../services/GenresService'

import * as ga from '../../lib/ga'

const Search = () => {
	const [queryInput, setQueryInput] = useState('')
	const [selectGenre, setselectGenre] = useState('')
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const { setResults } = useContext(GlobalContext)
	const inputElement = useRef()
	const selectGenreElement = useRef()
	const { genres } = GenresService
	const submitLabel = 'Create!'
	const placeholder = 'Enter a topic for your story'

	async function onSubmit(event) {
		event.preventDefault()
		setError(false)
		setLoading(true)
		inputElement.current.blur()

		try {
			const response = await fetch('/api/generate', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ query: queryInput, genre: selectGenre }),
			})

			const data = await response.json()
			if (response.status !== 200) {
				throw data.error || new Error(`Request failed with status ${response.status}`)
			}

			if (
				!data.result.endsWith('.') &&
				!data.result.endsWith('?') &&
				!data.result.endsWith(',') &&
				!data.result.endsWith('!') &&
				!data.result.endsWith('"')
			) {
				data.result = data.result + '...'
			}

			setResults([{ data: data.result, label: queryInput, genre: selectGenre }])
			ga.sendevent('Query Search', { data: data.result, label: queryInput })
			//setQueryInput('')
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
				className='mb-16 flex flex-col items-center rounded bg-slate-300 p-2'>
				<div className='grid'>
					<input
						type='text'
						name='query'
						className='rounded border border-purple-500 bg-white p-2 text-xl focus:border-cyan-500 focus:outline-none md:w-96'
						placeholder={placeholder}
						value={queryInput}
						autoComplete='off'
						data-testid='queryinput'
						onFocus={() => scrollTo('searchform')}
						ref={inputElement}
						onChange={(e) => setQueryInput(e.target.value)}
					/>
					<select
						className='mt-2 rounded border border-purple-500 bg-white p-2 text-xl focus:border-cyan-500 focus:outline-none'
						ref={selectGenreElement}
						onChange={(e) => setselectGenre(e.target.value)}>
						<option value=''>Select Genre</option>
						{genres &&
							genres.map((item, index) => (
								<option
									value={item.value}
									key={index}>
									{item.label}
								</option>
							))}
					</select>
				</div>
				<button
					type='submit'
					disabled={!queryInput.length || !selectGenre.length}
					hidden={!queryInput.length || !selectGenre.length}
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
