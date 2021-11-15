import { screen } from '@testing-library/react';
import UserList from './user-list';
import {renderWithRedux} from "../../test/testing-helper";

test('renders learn react link', () => {
  renderWithRedux(<UserList />);
  const linkElement = screen.queryByText(/learn react/i);
  expect(linkElement).not.toBeInTheDocument();
});