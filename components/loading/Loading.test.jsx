import { render, screen } from '@testing-library/react'
import Loading from './Loading.jsx'

describe('Loading tests', () => {
	let figure

	beforeEach(() => {
		render(<Loading />)
		figure = screen.getByTestId('figure')
	})

	it('renders', () => {})

	it('contains element svg', () => {
		const svg = screen.getByTestId('svg')
		expect(figure).toContainElement(svg)
	})
})
