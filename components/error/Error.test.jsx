import { render, screen } from '@testing-library/react'
import Error from './Error.jsx'

const heading = 'Error'
const message = 'An error message'

describe('Error tests', () => {
	beforeEach(() => {
		render(<Error message={message} />)
	})

	it('renders', () => {})

	it('uses custom text for the heading label', () => {
		expect(screen.queryByTestId('heading')).toHaveTextContent(heading)
	})

	it('uses custom text for the message label', () => {
		expect(screen.queryByTestId('message')).toHaveTextContent(message)
	})
})
