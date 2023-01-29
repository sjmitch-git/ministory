import { render, screen } from '@testing-library/react'
import * as nextRouter from 'next/router'

import SEO from './SEO.jsx'

nextRouter.useRouter = jest.fn()
nextRouter.useRouter.mockImplementation(() => ({ route: '/' }))

describe('SEO tests', () => {
	it('renders', () => {
		render(<SEO />)
	})
})
