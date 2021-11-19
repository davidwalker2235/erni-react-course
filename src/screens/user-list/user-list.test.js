import {screen, waitFor} from '@testing-library/react';
import UserList from './user-list';
import {renderWithRedux} from "../../../test/testing-helper";
import {scopeGetNoUserList, scopeGetUserList} from "../../../test/scopes";

// screen.logTestingPlaygroundURL();
// screen.debug()

describe('UserList', () => {
  const renderUserList = () =>
    renderWithRedux(<UserList />);

  it('should renders user list', async () => {
    // Arrange
    renderUserList();
    const scope = scopeGetUserList();

    // Action
    await waitFor(() => expect(scope.isDone()).toBe(true));
    await screen.findByTestId('user-id-1');

    // Assert
    expect(screen.getByText(/mockUser/i)).toBeInTheDocument();
  });

  it('should render no users list', async () => {
    // Arrange
    renderUserList();
    const scope = scopeGetNoUserList();

    // Action
    await waitFor(() => expect(scope.isDone()).toBe(true));

    // Assert
    expect(screen.getByText(/No Users/i)).toBeInTheDocument();
  });
});