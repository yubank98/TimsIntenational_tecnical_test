import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerContent = (
    <List>
      <ListItem
        button
        component={Link}
        to="/login"
        onClick={toggleDrawer(false)}
      >
        <ListItemText primary="Login" />
      </ListItem>
      <ListItem button onClick={toggleDrawer(false)}>
        <ListItemText primary="Start Free Trial" />
      </ListItem>
    </List>
  );

  return (
    <AppBar
      sx={{
        backgroundColor: "#2c3e50",
        color: "white",
        boxShadow: 3,
        padding: "0 16px",
        width: "100%",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <LocalMoviesIcon sx={{ fontSize: 30 }} />
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
              Demo Series y Peliculas
            </Typography>
          </Link>
        </Stack>

        {!isSmallScreen && (
          <Stack direction="row" spacing={2}>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button
                variant="text"
                sx={{
                  color: "white",
                  "&:hover": { backgroundColor: "#34495e" },
                }}
              >
                Login
              </Button>
            </Link>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#e74c3c",
                "&:hover": { backgroundColor: "#c0392b" },
                padding: "8px 16px",
                fontWeight: "bold",
              }}
            >
              Start Free Trial
            </Button>
          </Stack>
        )}

        {isSmallScreen && (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
