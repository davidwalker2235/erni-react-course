import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counterValue: 10,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increaseValue: (state, action) => {
      state.counterValue = state.counterValue + action.payload;
    },
    decreaseValue: (state, action) => {
      state.counterValue = state.counterValue - action.payload;
    },
  },
});

export const {
  increaseValue,
  decreaseValue
} = counterSlice.actions;

export const selectCounterValue = (state) => state.counter.counterValue;


export default counterSlice.reducer;
