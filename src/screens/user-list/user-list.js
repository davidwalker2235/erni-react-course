import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import {ListRow} from "../../components";

const UserList = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container justifyContent="center">
        <Grid item paddingTop={5} xs={12} xl={8} md={8} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              {[{name: 'David', id: 1}, {name: 'Silvi', id: 2}].map(user => <ListRow key={user.id} name={user.name} />)}
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default UserList;