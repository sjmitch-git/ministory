const Error = ({ message }) => {
	const heading = 'Error'
	return (
		<div className='text-center' data-testid="error">
			<blockquote className='mx-auto max-w-xl border-l-4 border-red-700 bg-red-100 p-4 text-left text-red-700'>
				<h4 className='mb-2 font-bold'>{heading}</h4>
				<p className='text-2xl'>{message}</p>
			</blockquote>
		</div>
	)
}

export default Error