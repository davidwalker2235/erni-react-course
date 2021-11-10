import {useDispatch} from 'react-redux';

import {
  createErrorToast as createErrorToastAction,
  createInfoToast as createInfoToastAction,
  createSuccessToast as createSuccessToastAction,
  createWarningToast as createWarningToastAction
} from 'store/actions/shared/toaster.actions';

export const useCreateToast = () => {
  const dispatch = useDispatch();

  const createErrorToast = (error) => dispatch(createErrorToastAction(error?.errorMessage || 'Unknown error'));
  const createInfoToast = (message) => dispatch(createInfoToastAction(message));
  const createWarningToast = (message) => dispatch(createWarningToastAction(message));
  const createSuccessToast = (message) => dispatch(createSuccessToastAction(message));

  return {createInfoToast, createWarningToast, createErrorToast, createSuccessToast};
};