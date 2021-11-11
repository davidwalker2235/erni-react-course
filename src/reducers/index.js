import counterSlice from "./counterReducer";
import modalSlice from "./modalReducer";
import appSlice from "./appReducer";

const rootReducers = {
  [counterSlice.name]: counterSlice.reducer,
  [modalSlice.name]: modalSlice.reducer,
  [appSlice.name]: appSlice.reducer
  }

export default rootReducers;