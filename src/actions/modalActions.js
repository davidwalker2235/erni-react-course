const modalActions = {
  showDialog: (state, action) => {
    state.isVisible = true;
    state.modalChildren = action.payload;
  },
  hideDialog: state => {
    state.isVisible = false;
    state.modalChildren = null;
  },
}

export default modalActions