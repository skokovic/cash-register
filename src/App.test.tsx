import * as React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Cash app title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Cash app/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders Home page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
