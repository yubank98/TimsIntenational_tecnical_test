import React from "react";
import {
  Button,
  TextField,
  Container,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";

const Login = () => {
  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh", 
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundColor: "#1a2e50",
          borderRadius: "10px",
          boxShadow: 3,
          padding: { xs: 3, sm: 4 },
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <Avatar
          sx={{
            width: { xs: 70, sm: 100 },
            height: { xs: 70, sm: 100 },
            backgroundColor: "#e74c3c",
            marginBottom: 2,
          }}
        >
          <LocalMoviesIcon sx={{ fontSize: { xs: 35, sm: 50 } }} />
        </Avatar>

        <Typography
          variant="h5"
          component="h1"
          gutterBottom
          color="white"
          sx={{ fontWeight: "bold" }}
        >
          Login
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
          sx={{
            borderRadius: "8px",
            marginBottom: 2,
            backgroundColor: "white",
          }}
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          sx={{
            borderRadius: "8px",
            marginBottom: 2,
            backgroundColor: "white",
          }}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            padding: "10px",
            fontWeight: "bold",
            borderRadius: "8px",
            backgroundColor: "#3498db",
            "&:hover": {
              backgroundColor: "#2980b9",
            },
          }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
