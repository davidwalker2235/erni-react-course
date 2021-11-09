import * as React from "react";
import './header-bar.css';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function HeaderBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Users
        </Typography>
        <Button color="inherit">ADD</Button>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderBar;
