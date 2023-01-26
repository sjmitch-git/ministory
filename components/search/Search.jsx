import { useState, useContext } from 'react'

import GlobalContext from '../../contexts/globalContext'
import Loading from '../../components/loading'
import Error from '../../components/error'
    
const Search = () => {
    const [queryInput, setQueryInput] = useState('')
	const [loading, setLoading] = useState(false)
  	const [error, setError] = useState(false)
    const {results, setResults} = useContext(GlobalContext)

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
        {error && <div className='w-full mb-8'><Error message={error} /></div>}
		<form
            onSubmit={onSubmit}
            className='flex flex-col items-center mb-16 bg-slate-100 p-4 rounded'>
            <input
                type='text'
                name='query'
                className='border border-cyan-500 focus:border-orange-500 focus:outline-none rounded p-2 text-xl md:w-96'
                placeholder={placeholder}
                value={queryInput}
                autoComplete='off'
                onChange={(e) => setQueryInput(e.target.value)}
            />
            <button
                type='submit'
                disabled={!queryInput.length}
                hidden={!queryInput.length}
                className='text-xl w-full bg-teal-400 disabled:bg-slate-400 text-white mt-6 p-3 rounded text-center uppercase'>
                {loading ? (
                    <div className='w-[28px] mx-auto'>
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