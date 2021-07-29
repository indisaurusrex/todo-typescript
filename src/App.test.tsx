import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

const mockTodos = [
  {title: "here's one"},
  {title: 'and another'}
]

test('renders learn react link', () => {
  render(<App todos={mockTodos}/>);
  const linkElement = screen.getByText(/and another/i);
  expect(linkElement).toBeInTheDocument();
});
