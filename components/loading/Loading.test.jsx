import { render, screen } from '@testing-library/react';
import Loading from './Loading.jsx';

describe('Loading tests', () => {
    it('renders', () => {
        render(<Loading />);
    });
});