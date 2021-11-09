import { render, screen } from '@testing-library/react';
import UserList from './root-page';

test('renders learn react link', () => {
  render(<UserList />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});