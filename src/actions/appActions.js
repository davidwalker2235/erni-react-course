const appActions = {
  updateUserList: (state, action) => {
    state.userList = action.payload;
  }
}

export default appActions