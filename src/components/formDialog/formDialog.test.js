import {screen} from '@testing-library/react';
import FormDialog from './formDialog';
import {renderWithRedux} from "../../../test/testing-helper";

describe('FormDialog', () => {
  const renderFormDialog = () =>
    renderWithRedux(<FormDialog />);

  it('should render no users list', () => {
    // Arrange
    renderFormDialog();
    const linkElement = screen.queryByText(/Write an user name/i);

    // Action
    // Assert
    expect(linkElement).toBeInTheDocument();
  });
});