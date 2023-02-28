import Link from 'next/link'

import * as ga from '../../lib/ga'

const Navigation = () => {
	const sendEvent = (page) => {
		ga.sendevent('Navigation', { page: page })
	}

	return (
		<nav>
			<ul className='flex gap-4 text-2xl'>
				<li>
					<Link
						href='/'
						onClick={() => sendEvent('Create')}>
						Create
					</Link>
				</li>
				<li>
					<Link
						href='/saved'
						onClick={() => sendEvent('Saved')}>
						Saved
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation
