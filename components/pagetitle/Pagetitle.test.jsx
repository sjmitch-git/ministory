import { render, screen } from '@testing-library/react'
import Pagetitle from './Pagetitle.jsx'

const title = 'Page title'

describe('Pagetitle tests', () => {
	beforeEach(() => {
		render(<Pagetitle title={title} />)
	})

	it('renders', () => {})

	it('uses custom text for title', () => {
		expect(screen.queryByTestId('title')).toHaveTextContent(title)
	})
})
