import { render, screen } from '@testing-library/react'
import Footer from './Footer.jsx'
import config from '../../app.config'

const { author, description, authorUrl } = config.siteMetadata

describe('Footer tests', () => {
	beforeEach(() => {
		render(<Footer />)
	})

	it('renders', () => {})

	it('uses custom text for description', () => {
		expect(screen.queryByTestId('description')).toHaveTextContent(description)
	})

	it('uses custom text for author link', () => {
		expect(screen.queryByTestId('link')).toHaveTextContent(author)
	})

	it('has link with rel noreferrer attribute', () => {
		expect(screen.queryByTestId('link')).toHaveAttribute('rel', 'noreferrer')
	})

	it('has link with target blank attribute', () => {
		expect(screen.queryByTestId('link')).toHaveAttribute('target', '_blank')
	})

	it('has link with correct href', () => {
		expect(screen.queryByTestId('link')).toHaveAttribute('href', authorUrl)
	})
})
