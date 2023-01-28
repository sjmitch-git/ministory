import { render, screen } from '@testing-library/react';
import Error from './Error.jsx';

const message = 'An error message'

describe('Error tests', () => {
    it('renders', () => {
        render(<Error message={message} />)
        expect(screen.getByTestId("error")).toBeInTheDocument();
    });
});