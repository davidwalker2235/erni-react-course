import counter from './counterReducer';

const rootReducer = {
  [counter.name]: counter.reducer
};

export default rootReducer;
