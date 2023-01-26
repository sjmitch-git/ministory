import { createContext } from 'react'

const defaultState = {
	results: [],
	setResults: () => {},
}

const GlobalContext = createContext(defaultState)

export default GlobalContext
