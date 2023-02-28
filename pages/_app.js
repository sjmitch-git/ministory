import { useState } from 'react'

import { Analytics } from '@vercel/analytics/react'
import GlobalContext from '../contexts/globalContext'

import Layout from '../components/layout'

import '../styles/index.css'

export default function App({ Component, pageProps }) {
	const [results, setResults] = useState([])
	const [saved, setSaved] = useState([])
	const contextValues = { results, setResults, saved, setSaved }

	return (
		<GlobalContext.Provider value={contextValues}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
			<Analytics />
		</GlobalContext.Provider>
	)
}
