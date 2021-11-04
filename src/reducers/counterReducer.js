import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counterValue: 10,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increaseValue: (state) => {
      state.counterValue = state.counterValue += 1;
    },
    decreaseValue: (state) => {
      state.counterValue = state.counterValue -= 1;
    },
    incrementByAmount: (state, action) => {
      state.counterValue = state.counterValue + action.payload;
    },
  },
});

export const {
  increaseValue,
  decreaseValue,
  incrementByAmount
} = counterSlice.actions;

export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 2000);
};

export const selectCounterValue = (state) => state.counter.counterValue;

export default counterSlice;
