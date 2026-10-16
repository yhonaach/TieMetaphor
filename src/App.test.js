// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TieMetaphor title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TieMetaphor/i);
    expect(titleElement).toBeInTheDocument();
});
