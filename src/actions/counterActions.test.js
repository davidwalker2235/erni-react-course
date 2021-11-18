import counterActions from './counterActions'

describe('CounterActions', () => {

  it('shold increase value async', () => {
    // Arrange
    let state = {value: 0}
    const action = {payload: 1}

    // Action
    counterActions.increaseValueAsync(state, action)

    // Assert
    expect(state.value).toEqual(1);
  });
});