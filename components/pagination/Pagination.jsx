const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
	const pagesCount = Math.ceil(items / pageSize)
	console.log(pagesCount)
	if (pagesCount < 2) return null

	const pages = Array.from({ length: pagesCount }, (_, i) => i + 1)

	return (
		<div>
			<ul className='flex justify-between rounded bg-slate-900 text-2xl text-slate-100'>
				<li>
					<button
						className='p-2'
						disabled={currentPage === 1}
						onClick={() => onPageChange(1)}>
						First
					</button>
				</li>
				<li>
					<button
						className='p-2'
						disabled={currentPage === 1}
						onClick={() => onPageChange(Number(currentPage) - 1)}>
						&laquo;
					</button>
				</li>
				<li>
					<select
						value={currentPage}
						className='cursor-pointer border-x border-white bg-slate-900 p-2 text-xl text-slate-100 focus:border-cyan-500 focus:outline-none'
						onChange={(e) => onPageChange(e.target.value)}>
						{pages.map((page) => (
							<option
								value={page}
								key={page}>
								{page}
							</option>
						))}
					</select>
				</li>
				<li>
					<button
						className='p-2'
						disabled={currentPage === pagesCount}
						onClick={() => onPageChange(Number(currentPage) + 1)}>
						&raquo;
					</button>
				</li>
				<li>
					<button
						className='p-2'
						disabled={currentPage === pagesCount}
						onClick={() => onPageChange(pagesCount)}>
						Last
					</button>
				</li>
			</ul>
		</div>
	)
}
export default Pagination
