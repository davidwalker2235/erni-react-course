import {screen} from '@testing-library/react';
import ListRow from './list-row';
import {renderWithRedux} from "../../test/testing-helper";

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
});