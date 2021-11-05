const counterActions = {
  increaseValue: state => {
  state.value = state.value + 1
},
  decreaseValue: state => {
  state.value = state.value - 1
},
  increaseValueAsync: (state, action) => {
    state.value = state.value + action.payload
  }
}

export default counterActions