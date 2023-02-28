import { createContext } from 'react'

const defaultState = {
	results: [],
	setResults: () => {},
	saved: [],
	setSaved: () => {},
}

const GlobalContext = createContext(defaultState)

export default GlobalContext
