import counterSlice from "./counterReducer";
import toastSlice from "./toastReducer";

const rootReducers = {
  [counterSlice.name]: counterSlice.reducer,
  [toastSlice.name]: toastSlice.reducer
  }

export default rootReducers;