import {fireEvent, screen, waitFor} from '@testing-library/react';
import ListRow from './list-row';
import {renderWithRedux} from "../../../test/testing-helper";
import {scopeDeleteUser, scopeGetUserList} from "../../../test/scopes";

describe('ListRow', () => {
  const renderListRow = () =>
      renderWithRedux(<ListRow id={1} name="David" />);

  it('should render list row correctly', () => {
    renderListRow();
    const deleteButton = screen.getByRole('button', { name: /delete/i });
    expect(deleteButton).toBeInTheDocument();

    const name = screen.getByText(/david/i);
    expect(name).toBeInTheDocument();
  });

  it('should delete correctly', async () => {
    renderListRow();
    const scopeGetUsers = scopeGetUserList();
    const scopeDeleteUsers = scopeDeleteUser();
    const deleteButton = screen.getByRole('button', { name: /delete/i });

    fireEvent.click(deleteButton);
    await waitFor(() => expect(scopeGetUsers.isDone()).toBe(true));
    await waitFor(() => expect(scopeDeleteUsers.isDone()).toBe(true));
  });
});