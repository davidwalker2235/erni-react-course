import {useMutation, useQuery} from "react-query";
import {useDispatch} from "react-redux";
import Queries from './queries';
import AppService from "./app.service";
import Urls from "../constants/urls";
import {showToast} from "../reducers/toastReducer";
const appService = new AppService();

export function useFetchGetGlobalDataQuery() {
  const dispatch = useDispatch();
  return useQuery(
    [Queries.GetGlobalData],
    () => {
      dispatch(showToast({type: 'error', text: 'toaster text'}))
      return appService.getGlobalData({url: Urls.GlobalData})
    },
    {
      onError: ({errorMessage = 'Error'}) => {
        alert(errorMessage)
      },
    }
  );
}

export const useFetchGetAllListMutation = () => {
  return useMutation(
    () => {
      return appService.getGlobalData({url: Urls.GlobalData});
    },
    {
      onError: ({errorMessage = 'Error'}) => {
        alert(errorMessage)
      },
    }
  );
}
