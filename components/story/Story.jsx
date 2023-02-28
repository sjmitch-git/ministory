const Story = ({ label, data, genre, date }) => {
	return (
		<article className='max-w-3xl px-2 md:px-4 '>
			{label && <p className='py-6 text-3xl font-bold uppercase tracking-wide opacity-60 md:text-4xl'>{label}</p>}
			<span className='font-mono text-lg tracking-widest opacity-80 md:text-xl lg:text-2xl'>{data}</span>
		</article>
	)
}

export default Story
