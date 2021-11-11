import * as React from "react";
import './header-bar.css';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useModal} from "../../hooks/useModal";
import {FormDialog} from "../index";

function HeaderBar() {
  const {showModal: showNewUserModal} = useModal(<FormDialog />)

  const handleNewUser = () => {
    showNewUserModal()
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Users
        </Typography>
        <Button onClick={handleNewUser} color="inherit">ADD</Button>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderBar;
