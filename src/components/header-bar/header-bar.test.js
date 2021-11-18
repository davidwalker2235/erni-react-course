import { screen } from '@testing-library/react';
import HeaderBar from './header-bar';
import {renderWithRedux} from "../../../test/testing-helper";

describe('HeaderBar', () => {
  const renderHeaderBar = () =>
    renderWithRedux(<HeaderBar />);

  it('should render Header bar correctly', () => {
    renderHeaderBar();
    const linkElement = screen.queryByText(/Users/i);
    expect(linkElement).toBeInTheDocument();
  });
});