import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Explora el universo del anime y manga/i,
  );
  expect(linkElement).toBeInTheDocument();
});
