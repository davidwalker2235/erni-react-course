import counterActions from './counterActions'

describe('CounterActions', () => {

  it('shold increase value async', () => {
    let state = {value: 0}
    const action = {payload: 1}
    counterActions.increaseValueAsync(state, action)

    expect(state.value).toEqual(1);
  });
});