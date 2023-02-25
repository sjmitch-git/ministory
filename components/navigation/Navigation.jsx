import Link from 'next/link'

const Navigation = () => {
	return (
		<nav>
			<ul className='flex gap-4 text-2xl'>
				<li>
					<Link href='/'>Create</Link>
				</li>
				<li>
					<Link href='/saved'>Saved</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation
