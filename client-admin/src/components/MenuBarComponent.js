import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import MyContext from "../contexts/MyContext";

const MenuBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const username = JSON.parse(sessionStorage.getItem("username"));
  const handleLogoutClick = () => {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("token");
    window.location.href = "/admin";
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="primary" sx={{ backgroundColor: "#006f45" }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container alignItems="center">
            <Grid item>
              <Typography
                variant="h6"
                component={Link}
                to="/admin/home"
                sx={{ flexGrow: 1, textDecoration: "none" }}
                color="inherit"
              >
                <div className="logo_png">
                  <img
                    src="https://1.bp.blogspot.com/-ppT3QD3BNZE/UM4I0O0cNWI/AAAAAAAABlw/7TUyyAgsCYo/s1600/apple+logo.png"
                    alt=""
                    className="logo"
                  ></img>
                  <div className="idea">Fresh-Fruit</div>
                </div>
              </Typography>
            </Grid>
            <Grid item>
              <Button
                color="inherit"
                component={Link}
                to="/admin/category"
                sx={{
                  padding: "10px",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                  },
                }}
              >
                Category
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/admin/product"
                sx={{
                  padding: "10px",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                  },
                }}
              >
                Product
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/admin/order"
                sx={{
                  padding: "10px",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                  },
                }}
              >
                Order
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/admin/customer"
                sx={{
                  padding: "10px",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                  },
                }}
              >
                Customer
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/admin/add-admin"
                sx={{
                  padding: "10px",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                  },
                }}
              >
                Create Admin
              </Button>
            </Grid>
          </Grid>
        </Box>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="subtitle1" sx={{ ml: 2 }}>
            Hello, <b>{username}</b>
          </Typography>
          <IconButton onClick={handleMenuClick} color="inherit">
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default MenuBar;