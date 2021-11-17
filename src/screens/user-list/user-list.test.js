import { screen, waitFor } from '@testing-library/react';
import UserList from './user-list';
import {renderWithRedux} from "../../test/testing-helper";
import {scopeGetUserList} from "../../test/scopes";

// test('renders no users list', () => {
//   renderWithRedux(<UserList />);
//   // screen.logTestingPlaygroundURL();
//   expect(screen.getByText(/No Users/i)).toBeInTheDocument();
// });
//
// test('renders user list', async () => {
//   renderWithRedux(<UserList />);
//   const getUserListScope = scopeGetUserList();
//   await waitFor(() => expect(getUserListScope.isDone()).toBe(true));
//   // screen.logTestingPlaygroundURL();
//   expect(screen.getByText(/No Users/i)).toBeInTheDocument();
// });

describe('UserList', () => {
  const renderUserList = () =>
    renderWithRedux(<UserList />);

  beforeEach(() => {
    // scopeGetUserList();
  });

  describe('Rendering User list', () => {
    it('should render no users list', () => {
      renderUserList();
      // screen.logTestingPlaygroundURL();
      expect(screen.getByText(/No Users/i)).toBeInTheDocument();
    });

    it('should renders user list', async () => {
      renderUserList();
      const getUserListScope = scopeGetUserList();
      await waitFor(() => expect(getUserListScope.isDone()).toBe(true));
      screen.logTestingPlaygroundURL();
      expect(screen.getByText(/No Users/i)).toBeInTheDocument();
    });
  });
});