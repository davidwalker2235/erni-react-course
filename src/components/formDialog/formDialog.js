import TextField from '@mui/material/TextField';
import DialogContent from '@mui/material/DialogContent';
import {DialogContentText, DialogActions, Button} from '@mui/material';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {hideDialog} from "../../reducers/modalReducer";
import {useFetchGetUpdatedListMutation, useFetchSaveNewUserMutation} from "../../services/app.query";

const FormDialog = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState(undefined)
  const {mutateAsync: fetchGetUserData} = useFetchGetUpdatedListMutation();
  const  {mutateAsync: fetchSaveNewUser} = useFetchSaveNewUserMutation({
    onSuccess: fetchGetUserData
  })

  const handleOnSave = () => {
    fetchSaveNewUser(name);
  }

  const handleOnCancel = () => {
    dispatch(hideDialog());
  }

  return (
  <div>
    <DialogContent>
      <DialogContentText>
        Write an user name.
      </DialogContentText>
      <TextField
        onChange={event => setName(event.target.value)}
        autoFocus
        margin="dense"
        id="name"
        label="Name"
        fullWidth
        variant="standard"
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleOnCancel}>Cancel</Button>
      <Button onClick={handleOnSave}>Save</Button>
    </DialogActions>
  </div>
  );
}

export default FormDialog;