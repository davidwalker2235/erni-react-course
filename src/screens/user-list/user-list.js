import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import {ListRow} from "../../components";
import Typography from "@mui/material/Typography";
import {useSelector} from "react-redux";
import {selectUserList} from "../../reducers/appReducer";
import {useFetchGetUpdatedListMutation} from "../../services/app.query";
import {useEffect} from "react";
import HeaderBar from "../../components/header-bar/header-bar";


const UserList = () => {
  const userList = useSelector(selectUserList);
  const {mutateAsync: fetchGetUserData} = useFetchGetUpdatedListMutation();

  useEffect(() => {
    fetchGetUserData();
  }, [])

  return (
    <Box sx={{ width: '100%' }}>
      <HeaderBar />
      <Grid container justifyContent="center">
        <Grid item paddingTop={5} xs={12} xl={8} md={8} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            {userList && userList.length ?
              <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {userList.map(user => <ListRow key={user.id} name={user.name} id={user.id}/>)}
              </List> :
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                No Users
              </Typography>}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default UserList;