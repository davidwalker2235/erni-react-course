// import {forwardRef} from 'react';
// import './toaster.css';
// import { useSelector, useDispatch } from "react-redux";
// import {hideToast, selectToasterIsVisible, selectToasterText, selectToasterType} from "../../reducers/toastReducer";
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert from '@mui/material/Alert';
//
// const Alert = forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });
//
// function Toaster() {
//   const dispatch = useDispatch();
//   const isVisible = useSelector(selectToasterIsVisible);
//   const toastType = useSelector(selectToasterType);
//   const toastText = useSelector(selectToasterText);
//
//   const handleClose = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }
//     dispatch(hideToast());
//   };
//
//   return (
//     <Snackbar open={isVisible} autoHideDuration={3000} onClose={handleClose}>
//       <Alert onClose={handleClose} severity={toastType} sx={{ width: '100%' }}>
//         {toastText}
//       </Alert>
//     </Snackbar>
//   );
// }
//
// export default Toaster;
