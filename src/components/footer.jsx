import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Grid2";
import googleplay from "../assets/google-play.png";
import AppStore from "../assets/logotipo-de-apple.png";
import Microsoft from "../assets/microsoft.png";
import Facebook from "../assets/facebook.png";
import Xlogo from "../assets/xlogo.png";
import Instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#2c3e50",
        color: "white",
        py: 5,
        mt: "auto",
        width: "100%",
        mb: -3.5,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
              Home
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
              Terms and Conditions
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
              Privacy Policy
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
              Collection Statement
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
              Help
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
              Manage Account
            </Link>
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #e0e0e0",
            pt: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Link href="#" color="inherit">
              <img src={Facebook} alt="Facebook" style={{ height: "40px" }} />
            </Link>
            <Link href="#" color="inherit">
              <img src={Xlogo} alt="Xlogo" style={{ height: "40px" }} />
            </Link>
            <Link href="#" color="inherit">
              <img src={Instagram} alt="Instagram" style={{ height: "40px" }} />
            </Link>
          </Box>

          <Typography variant="body2" sx={{ mb: { xs: 2, sm: 0 } }}>
            © {new Date().getFullYear()} DEMO Streaming. All Rights Reserved.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Link href="#" color="inherit">
              <img src={AppStore} alt="App Store" style={{ height: "40px" }} />
            </Link>
            <Link href="#" color="inherit">
              <img
                src={googleplay}
                alt="Google Play"
                style={{ height: "40px" }}
              />
            </Link>
            <Link href="#" color="inherit">
              <img src={Microsoft} alt="Microsoft" style={{ height: "40px" }} />
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
