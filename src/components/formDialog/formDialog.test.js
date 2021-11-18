import {screen} from '@testing-library/react';
import FormDialog from './formDialog';
import {renderWithRedux} from "../../../test/testing-helper";

describe('FormDialog', () => {
  const renderFormDialog = () =>
    renderWithRedux(<FormDialog />);

  it('should render no users list', () => {
    renderFormDialog();
    const linkElement = screen.queryByText(/Write an user name/i);
    expect(linkElement).toBeInTheDocument();
  });
});