import { render, screen } from '@testing-library/react'
import * as nextRouter from 'next/router'
import Header from './Header.jsx'
import config from '../../app.config'

const { name } = config.siteMetadata

nextRouter.useRouter = jest.fn()
nextRouter.useRouter.mockImplementation(() => ({ route: '/' }))

describe('Header tests', () => {
	beforeEach(() => {
		render(<Header />)
	})

	it('renders', () => {})

	it('has image width', () => {
		expect(screen.queryByTestId('image')).toHaveAttribute('width')
	})

	it('has image height', () => {
		expect(screen.queryByTestId('image')).toHaveAttribute('height')
	})

	it('has image alt', () => {
		expect(screen.queryByTestId('image')).toHaveAttribute('alt')
	})

	it('uses custom text for app name', () => {
		expect(screen.queryByTestId('name')).toHaveTextContent(name)
	})
})
