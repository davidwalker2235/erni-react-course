import {createSlice} from "@reduxjs/toolkit";
import appActions from "../actions/appActions";

const initialState = {
  userList: [],
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: appActions
})

export const {updateUserList} = appSlice.actions;

export const selectUserList = (state) => state.app.userList;

export default appSlice;