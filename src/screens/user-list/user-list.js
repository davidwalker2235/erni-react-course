import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import {ListRow} from "../../components";
import {useFetchGetGlobalDataQuery} from "../../services/app.query";
import Typography from "@mui/material/Typography";


const UserList = () => {
  const {data} = useFetchGetGlobalDataQuery()

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container justifyContent="center">
        <Grid item paddingTop={5} xs={12} xl={8} md={8} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            {data && data.length ?
              <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {data && data.map(user => <ListRow key={user.id} name={user.name} />)}
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