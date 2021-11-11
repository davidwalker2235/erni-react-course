import {createSlice} from "@reduxjs/toolkit";
import modalActions from "../actions/modalActions";

const initialState = {
  isVisible: false,
  modalChildren: null
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: modalActions
})

export const {showDialog, hideDialog} = modalSlice.actions;

export const selectModalChildren = (state) => state.modal.modalChildren;
export const selectModalIsVisible = (state) => state.modal.isVisible;

export default modalSlice;