import counterSlice from "./counterReducer";

const rootReducers = {
  [counterSlice.name]: counterSlice.reducer
  }

export default rootReducers;