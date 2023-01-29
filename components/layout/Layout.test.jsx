import { render, screen } from '@testing-library/react'
import Layout from './Layout.jsx'

describe('Layout tests', () => {
	let layout

	beforeEach(() => {
		render(<Layout />)
		layout = screen.getByTestId('layout')
	})

	it('renders', () => {})

	it('has grid class', () => {
		expect(layout).toHaveClass('grid')
	})

	it('contains element main', () => {
		const main = screen.getByTestId('main')
		expect(layout).toContainElement(main)
	})

	it('contains element article', () => {
		const article = screen.getByTestId('article')
		expect(layout).toContainElement(article)
	})

	it('contains element header', () => {
		const header = screen.getByTestId('header')
		expect(layout).toContainElement(header)
	})

	it('contains element footer', () => {
		const footer = screen.getByTestId('footer')
		expect(layout).toContainElement(footer)
	})
})
