import { screen } from '@testing-library/react';
import RootPage from './root-page';
import {renderWithRedux} from "../../../test/testing-helper";

describe('RootPage', () => {
  const renderRootPage = () =>
    renderWithRedux(<RootPage />);

  beforeEach(() => {
    renderRootPage();
  })

  it('should render ENTER button correctly', () => {
    // Arrange
    const button = screen.getByTestId('root-page-button');
    let style = window.getComputedStyle(button)

    // Assert
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Enter')
    expect(style.backgroundColor).toBe('rgb(25, 118, 210)');
  });
});