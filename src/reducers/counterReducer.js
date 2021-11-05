import {createSlice} from "@reduxjs/toolkit";
import counterActions from "../actions/counterActions";

const initialState = {
  value: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: counterActions
})

export const {increaseValue, decreaseValue, increaseValueAsync} = counterSlice.actions;

//Async functions
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(increaseValueAsync(amount));
  }, 2000);
};

export default counterSlice;