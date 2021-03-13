import { render, screen } from '@testing-library/react';
import App from './App';
import GoalsTitle from './Components/GoalsTitle/GoalsTitle';

test('renders learn react link', () => {
  render(<GoalsTitle />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
