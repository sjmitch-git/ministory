import { Analytics } from '@vercel/analytics/react'

import '../styles/index.css'

export default function App({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
			<Analytics />
		</>
	)
}
