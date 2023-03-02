const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
	const pagesCount = Math.ceil(items / pageSize)

	if (pagesCount < 2) return null

	const pages = Array.from({ length: pagesCount }, (_, i) => i + 1)

	return (
		<div className='pagination'>
			<p className='pagination-info'>
				Page {currentPage}/{pagesCount}
			</p>
			<ul className='pagination-ul'>
				<li>
					<button
						className='pagination-btn'
						disabled={currentPage === 1}
						onClick={() => onPageChange(1)}>
						First
					</button>
				</li>
				<li>
					<button
						className='pagination-btn'
						disabled={currentPage === 1}
						onClick={() => onPageChange(Number(currentPage) - 1)}>
						Prev
					</button>
				</li>
				<li>
					<select
						value={currentPage}
						className='select'
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
						className='pagination-btn'
						disabled={currentPage === pagesCount}
						onClick={() => onPageChange(Number(currentPage) + 1)}>
						Next
					</button>
				</li>
				<li>
					<button
						className='pagination-btn'
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
