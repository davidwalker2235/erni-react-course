import {useDispatch} from 'react-redux';
import {hideDialog, showDialog} from "../reducers/modalReducer";
import {useEffect, useState} from "react";

export const useModal = (children) => {
  const dispatch = useDispatch();
  const [childrenComponent, setChildrenComponent] = useState()

  useEffect(() => {
    setChildrenComponent(children)
  }, [])

  const showModal = () => dispatch(showDialog(childrenComponent));
  const hideModal = () => dispatch(hideDialog());

  return {showModal, hideModal};
};