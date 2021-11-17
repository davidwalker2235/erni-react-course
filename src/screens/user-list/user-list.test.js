import {screen} from '@testing-library/react';
import UserList from './user-list';
import {renderWithRedux} from "../../test/testing-helper";

// screen.logTestingPlaygroundURL();
// screen.debug()

describe('UserList', () => {
  const renderUserList = () =>
    renderWithRedux(<UserList />);

  beforeEach(() => {
    // jest.resetAllMocks()
  });

  describe('Rendering User list', () => {
    it('should render no users list', () => {
      renderUserList();
      // screen.logTestingPlaygroundURL();
      expect(screen.getByText(/No Users/i)).toBeInTheDocument();
    });

    it('should renders user list', async () => {
      renderUserList();
      await screen.findByTestId('user-id-1');
      expect(screen.getByText(/mock name/i)).toBeInTheDocument();
    });
  });
});