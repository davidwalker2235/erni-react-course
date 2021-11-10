const toastActions = {
  showToast: (state, action) => {
    state.isVisible = true;
    state.toastType = action.payload.type;
    state.toastText = action.payload.text
  },
  hideToast: state => {
    state.isVisible = false;
  }
}

export default toastActions