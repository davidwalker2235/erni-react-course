import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const RootPage = () => {
  let navigate = useNavigate();
  return (
    <Box sx={{ width: '100%', height: '100vh' }} height={600}>
      <Grid container justifyContent="center" alignItems="center" sx={{ height: '93vh' }}>
        <Button variant="contained" onClick={() => navigate('/user-list')}>Enter</Button>
      </Grid>
    </Box>
  );
}

export default RootPage;