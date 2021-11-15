import { screen } from '@testing-library/react';
import ListRow from './list-row';
import {renderWithRedux} from "../../test/testing-helper";

test('renders learn react link', () => {
  renderWithRedux(<ListRow />);
  const linkElement = screen.queryByText(/ENTER/i);
  expect(linkElement).not.toBeInTheDocument();
});