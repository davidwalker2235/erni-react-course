import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import * as styles from './root-page-styles';

const RootPage = () => {
  let navigate = useNavigate();
  return (
    <Box sx={styles.rootPage} height={600}>
      <Grid container justifyContent="center" alignItems="center" sx={{ height: '93vh' }}>
        <Button data-testid="root-page-button" variant="contained" onClick={() => navigate('/user-list')}>Enter</Button>
      </Grid>
    </Box>
  );
}

export default RootPage;