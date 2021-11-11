import {useMutation, useQuery} from "react-query";
import {useDispatch} from "react-redux";
import Queries from './queries';
import AppService from "./app.service";
import Urls from "../constants/urls";
import {useCreateToast} from "../hooks/useCreateToast";
import {updateUserList} from "../reducers/appReducer";
import {hideDialog} from "../reducers/modalReducer";
const appService = new AppService();

export function useFetchGetGlobalDataQuery() {
  const {errorToast} = useCreateToast();
  const dispatch = useDispatch();
  return useQuery(
    [Queries.GetGlobalData],
    () => {
      const response = appService.getGlobalData({url: Urls.GlobalData})
      dispatch(updateUserList(response))
    },
    {
      onError: ({errorMessage = 'Error'}) => {
        dispatch(errorToast(errorMessage))
      },
    }
  );
}

export const useFetchSaveNewUserMutation = ({onSuccess}) => {
  const {successToast, errorToast} = useCreateToast();
  const dispatch = useDispatch();
  return useMutation(
    (name) => {
      return appService.createUser({url: Urls.CreateUser, payload: {name}});
    },
    {
      onSuccess: () => {
        dispatch(hideDialog())
        dispatch(successToast('User Successful created'));
        onSuccess();
      },
      onError: ({response}) => {
        dispatch(errorToast(response?.data?.detail || 'Unknown error'))
      },
    }
  );
}

export const useFetchGetUpdatedListMutation = () => {
  const {errorToast} = useCreateToast();
  const dispatch = useDispatch();
  return useMutation(
    async () => {
      const response = await appService.getGlobalData({url: Urls.GlobalData})
      dispatch(updateUserList(response))
    },
    {
      onError: ({errorMessage = 'Error'}) => {
        dispatch(errorToast(errorMessage))
      },
    }
  );
}

export const useFetchDeleteUserMutation = ({onSuccess}) => {
  const {successToast, errorToast} = useCreateToast();
  const dispatch = useDispatch();
  return useMutation(
    (user_id) => {
      debugger;
      return appService.deleteUser({url: Urls.CreateUser, payload: user_id});
    },
    {
      onSuccess: () => {
        dispatch(successToast('User Successful deleted'));
        onSuccess();
      },
      onError: ({response}) => {
        dispatch(errorToast(response?.data?.detail || 'Unknown error'))
      },
    }
  );
}
