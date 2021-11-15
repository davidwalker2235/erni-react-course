import { screen } from '@testing-library/react';
import RootPage from './root-page';
import {renderWithRedux} from "../../test/testing-helper";

test('renders learn react link', () => {
  renderWithRedux(<RootPage />);
  const linkElement = screen.getByTestId('root-page-button');
  expect(linkElement).toBeInTheDocument();
});