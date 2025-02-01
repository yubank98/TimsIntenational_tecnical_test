import React from "react";
import OptionCard from "./OptionCard";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";
import moviesImage from "../assets/peliculas.jpg";
import seriesImage from "../assets/series.jpg";
import { Box } from "@mui/material";

const OptionGrid = () => {
  return (
    <Box>
      <Grid container spacing={2} mt={10} justifyContent="center">
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Link to="/series" style={{ textDecoration: "none" }}>
            <OptionCard
              title=" Popular Series"
              description="Browse through our collection of series"
              imageUrl={seriesImage}
            />
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Link to="/movies" style={{ textDecoration: "none" }}>
            <OptionCard
              title="Popular Movies"
              description="Browse through our collection of movies"
              imageUrl={moviesImage}
            />
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OptionGrid;
