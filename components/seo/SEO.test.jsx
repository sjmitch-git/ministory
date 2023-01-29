import { render, screen } from '@testing-library/react'
import * as nextRouter from 'next/router'

import SEO from './SEO.jsx'
import config from '../../app.config'
import { imageOptimizer } from 'next/dist/server/image-optimizer.js'

const { title, description, keywords, img } = config.siteMetadata

nextRouter.useRouter = jest.fn()
nextRouter.useRouter.mockImplementation(() => ({ route: '/' }))

describe('SEO tests', () => {
	beforeEach(() => {
		render(
			<SEO
				title={title}
				description={description}
				keywords={keywords}
				img={img}
			/>
		)
	})

	it('renders', () => {})
})
