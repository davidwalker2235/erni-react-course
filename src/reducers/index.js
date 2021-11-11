import counterSlice from "./counterReducer";
import toastSlice from "./toastReducer";
import modalSlice from "./modalReducer";
import appSlice from "./appReducer";

const rootReducers = {
  [counterSlice.name]: counterSlice.reducer,
  [toastSlice.name]: toastSlice.reducer,
  [modalSlice.name]: modalSlice.reducer,
  [appSlice.name]: appSlice.reducer
  }

export default rootReducers;