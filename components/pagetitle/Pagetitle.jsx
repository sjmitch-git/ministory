const Pagetitle = ({ title }) => {
	return (
		<h1
			className=' py-6 text-center text-3xl font-bold uppercase tracking-wide opacity-60 md:text-4xl'
			data-testid='title'>
			{title}
		</h1>
	)
}

export default Pagetitle
