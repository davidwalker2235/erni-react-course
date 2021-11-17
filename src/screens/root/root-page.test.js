import { screen } from '@testing-library/react';
import RootPage from './root-page';
import {renderWithRedux} from "../../test/testing-helper";

test('should render ENTER button correctly', () => {
  renderWithRedux(<RootPage />);
  const button = screen.getByTestId('root-page-button');
  // screen.logTestingPlaygroundURL();
  // screen.debug(button)
  expect(button).toBeInTheDocument();

  expect(button).toHaveTextContent('Enter')

  let style = window.getComputedStyle(button)
  expect(style.backgroundColor).toBe('rgb(25, 118, 210)');
});
