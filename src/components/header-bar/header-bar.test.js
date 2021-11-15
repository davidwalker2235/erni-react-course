import { screen } from '@testing-library/react';
import HeaderBar from './header-bar';
import {renderWithRedux} from "../../test/testing-helper";

test('renders learn react link', () => {
  renderWithRedux(<HeaderBar />);
  const linkElement = screen.queryByText(/learn react/i);
  expect(linkElement).not.toBeInTheDocument();
});