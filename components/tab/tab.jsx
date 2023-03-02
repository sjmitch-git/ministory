import Link from 'next/link'

import { useRouter } from 'next/router'

import * as ga from '../../lib/ga'

const Tab = ({ href, label }) => {
	const router = useRouter()

	const sendEvent = (page) => {
		ga.sendevent('Navigation', { page: page })
	}

	return (
		<li className={`tab ${router.pathname == href ? 'active' : ''}`}>
			<Link
				href={href}
				className={`tab-link ${router.pathname == href ? 'active' : ''}`}
				onClick={() => sendEvent(label)}>
				{label}
			</Link>
		</li>
	)
}

export default Tab
