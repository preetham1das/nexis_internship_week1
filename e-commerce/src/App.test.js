import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the storefront and products dynamically', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /find something you will love/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /popular products/i })).toBeInTheDocument();
  expect(screen.getAllByRole('article')).toHaveLength(3);
  expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
});
