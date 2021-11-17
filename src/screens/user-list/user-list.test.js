import {screen, waitFor} from '@testing-library/react';
import UserList from './user-list';
import {renderWithRedux} from "../../test/testing-helper";
import {scopeGetUserList} from "../../test/scopes";

// screen.logTestingPlaygroundURL();
// screen.debug()

describe('UserList', () => {
  const renderUserList = () =>
    renderWithRedux(<UserList />);

  it('should render no users list', () => {
    renderUserList();
    expect(screen.getByText(/No Users/i)).toBeInTheDocument();
  });

  it('should renders user list', async () => {
    renderUserList();
    const scope = scopeGetUserList();
    await waitFor(() => expect(scope.isDone()).toBe(true));
    await screen.findByTestId('user-id-1');
    expect(screen.getByText(/mockUser/i)).toBeInTheDocument();
  });
});