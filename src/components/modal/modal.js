import Dialog from '@mui/material/Dialog';
import {useDispatch, useSelector} from "react-redux";
import {hideDialog, selectModalChildren, selectModalIsVisible} from "../../reducers/modalReducer";

const Modal = () => {
  const dispatch = useDispatch();
  const modalChildren = useSelector(selectModalChildren);
  const isVisible = useSelector(selectModalIsVisible);

  const handleClose = () => {
    dispatch(hideDialog())
  };

  return (
    <Dialog open={isVisible} onClose={handleClose}>
      {modalChildren}
    </Dialog>
  );
}

export default Modal;