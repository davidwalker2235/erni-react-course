import { screen } from '@testing-library/react';
import FormDialog from './formDialog';
import {renderWithRedux} from "../../test/testing-helper";

test('renders learn react link', () => {
  renderWithRedux(<FormDialog />);
  const linkElement = screen.queryByText(/learn react/i);
  expect(linkElement).not.toBeInTheDocument();
});