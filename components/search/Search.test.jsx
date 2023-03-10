import { render, screen } from '@testing-library/react'
import Search from './Search.jsx'

const placeholder = 'Enter a topic or title'

describe('Search tests', () => {
	beforeEach(() => {
		render(<Search />)
	})

	it('renders', () => {})

	it('should have submit button hidden initially', () => {
		expect(screen.queryByTestId('button')).not.toBeVisible()
	})

	it('should have input with no value', () => {
		expect(screen.queryByTestId('queryinput')).not.toHaveValue()
	})

	it('should have input with placeholder text', () => {
		expect(screen.queryByTestId('queryinput')).toHaveAttribute('placeholder', placeholder)
	})
})
