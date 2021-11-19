import {fireEvent, screen, waitFor} from '@testing-library/react';
import ListRow from './list-row';
import {renderWithRedux} from "../../../test/testing-helper";
import {scopeDeleteUser, scopeGetUserList} from "../../../test/scopes";

describe('ListRow', () => {
  const renderListRow = () =>
      renderWithRedux(<ListRow id={1} name="David" />);

  it('should render list row correctly', () => {
    // Arrange
    renderListRow();
    const deleteButton = screen.getByRole('button', { name: /delete/i });
    const name = screen.getByText(/david/i);
    // Action
    // Assert
    expect(deleteButton).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });

  it('should delete correctly', async () => {
    // Arrange
    renderListRow();
    const scopeDeleteUsers = scopeDeleteUser();
    const scopeGetUsers = scopeGetUserList();
    const deleteButton = screen.getByRole('button', { name: /delete/i });

    // Action
    fireEvent.click(deleteButton);

    // Assert
    await waitFor(() => expect(scopeDeleteUsers.isDone()).toBe(true));
    await waitFor(() => expect(scopeGetUsers.isDone()).toBe(true));
  });
});