import {useDispatch} from 'react-redux';
import {showToast} from "../reducers/toastReducer";

export const useCreateToast = () => {
  const dispatch = useDispatch();

  const errorToast = (message) => dispatch(showToast({type: 'error', text: message}));
  const successToast = (message) => dispatch(showToast({type: 'success', text: message}));

  return {errorToast, successToast};
};