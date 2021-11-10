import {createSlice} from "@reduxjs/toolkit";
import toastActions from "../actions/toastActions";

const initialState = {
  isVisible: false,
  toastType: '',
  toastText: ''
}

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: toastActions
})

export const {showToast, hideToast} = toastSlice.actions;

export const selectToasterIsVisible = (state) => state.toast.isVisible;
export const selectToasterType = (state) => state.toast.toastType;
export const selectToasterText = (state) => state.toast.toastText;

export default toastSlice;