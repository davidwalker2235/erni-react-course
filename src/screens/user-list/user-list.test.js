import { render, screen } from '@testing-library/react';
import UserList from './user-list';

test('renders learn react link', () => {
  render(<UserList />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});