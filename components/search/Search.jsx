import { useState, useContext, useRef, useEffect, memo } from 'react'

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
	const { results, setResults } = useContext(GlobalContext)
	const inputElement = useRef()
	const selectGenreElement = useRef()
	const { genres } = GenresService
	const submitLabel = 'Create!'
	const placeholder = 'Enter a topic or title'

	useEffect(() => {
		if (queryInput) onSubmit()
		ga.sendevent('Select Genre', { genre: selectGenre })
	}, [selectGenre])

	useEffect(() => {
		if (results[0]) setResults([])
		return () => setResults([])
	}, [setResults])

	async function onSubmit(event) {
		if (event) event.preventDefault()
		setError(false)
		setLoading(true)
		inputElement.current.blur()
		selectGenreElement.current.blur()

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
				className='form'>
				<div className='grid'>
					<input
						type='text'
						name='query'
						className='form-input'
						placeholder={placeholder}
						value={queryInput}
						autoComplete='off'
						data-testid='queryinput'
						onFocus={() => scrollTo('searchform')}
						ref={inputElement}
						onChange={(e) => setQueryInput(e.target.value)}
					/>
					<select
						className='form-select mt-2'
						ref={selectGenreElement}
						hidden={!queryInput.length}
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
					disabled={!queryInput.length || !selectGenreElement.current.value || loading}
					hidden={!queryInput.length || !selectGenreElement.current.value}
					data-testid='button'
					className='btn-primary mt-2 w-full'>
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
