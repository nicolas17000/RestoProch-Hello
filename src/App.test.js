import { render, screen, act } from '@testing-library/react';
import App from './App';

test('renders Hello, World!', () => {
  act(() => {
    render(<App />);
  });
  const linkElement = screen.getByText(/Hello, World!/i);
  expect(linkElement).toBeInTheDocument();
});
