import {useMutation, useQuery} from "react-query";
import {useDispatch} from "react-redux";
import Queries from './queries';
import AppService from "./app.service";
import Urls from "../constants/urls";
import {updateUserList} from "../reducers/appReducer";
import {hideDialog} from "../reducers/modalReducer";
const appService = new AppService();

export function useFetchGetGlobalDataQuery() {
  return useQuery(
    [Queries.GetGlobalData],
    () => {
      return appService.getGlobalData({url: Urls.GlobalData})
    },
    {
      onError: ({response}) => {
        alert(response?.data?.detail || 'Unknown error')
      },
    }
  );
}

export const useFetchSaveNewUserMutation = ({onSuccess}) => {
  const dispatch = useDispatch();
  return useMutation(
    (name) => {
      return appService.createUser({url: Urls.CreateUser, payload: {name}});
    },
    {
      onSuccess: () => {
        dispatch(hideDialog())
        onSuccess();
      },
      onError: ({response}) => {
        alert(response?.data?.detail || 'Unknown error')
      },
    }
  );
}

export const useFetchGetUpdatedListMutation = () => {
  const dispatch = useDispatch();
  return useMutation(
    async () => {
      const response = await appService.getGlobalData({url: Urls.GlobalData})
      dispatch(updateUserList(response))
    },
    {
      onError: ({response}) => {
        alert(response?.data?.detail || 'Unknown error')
      },
    }
  );
}

export const useFetchDeleteUserMutation = ({onSuccess}) => {
  return useMutation(
    (user_id) => {
      return appService.deleteUser({url: Urls.CreateUser, payload: user_id});
    },
    {
      onSuccess: () => {
        onSuccess();
      },
      onError: ({response}) => {
        alert(response?.data?.detail || 'Unknown error')
      },
    }
  );
}
