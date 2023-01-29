import { render, screen } from '@testing-library/react'

import Results from './Results.jsx'
import GlobalContext from '../../contexts/globalContext'

const mockResults = [
	{
		data: '🦇🤵',
		label: 'batman',
	},
]

describe('Results tests', () => {
	beforeEach(() => {
		const contextValues = { results: mockResults }
		render(
			<GlobalContext.Provider value={contextValues}>
				<Results />
			</GlobalContext.Provider>
		)
	})

	it('renders', () => {})

	it('returns correct emojis', () => {
		expect(screen.queryByTestId('data')).toHaveTextContent(mockResults[0].data)
	})

	it('returns correct custom text for label', () => {
		expect(screen.queryByTestId('label')).toHaveTextContent(mockResults[0].label)
	})
})
