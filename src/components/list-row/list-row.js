import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Paper from "@mui/material/Paper";
import useRowStyledBase from "./styles";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {useFetchDeleteUserMutation, useFetchGetUpdatedListMutation} from "../../services/app.query";

const ListRow = ({id, name}) => {
  const [PaperStyled] = useRowStyledBase(Paper);
  const {mutateAsync: fetchGetUserData} = useFetchGetUpdatedListMutation();
  const {mutateAsync: fetchDeleteUser} = useFetchDeleteUserMutation({
    onSuccess: fetchGetUserData
  });

  return (
    <PaperStyled key={id}>
      <ListItem
        sx={{ width: '100%'}}
        secondaryAction={
          <IconButton edge="end" aria-label="delete" onClick={() => fetchDeleteUser(id)}>
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar>
            <AccountCircleIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={name}
        />
      </ListItem>
    </PaperStyled>
  );
}

export default ListRow;