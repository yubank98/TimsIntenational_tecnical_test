import React from "react";
import ItemCard from "./ItemCard";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import movieData from "../data/sample.json";
import { usefilteredType } from "../hooks/useFilters";
import { useMovieFilters } from "../hooks/useMovieFilters";
import { Pagination, TextField, MenuItem, Box } from "@mui/material";

const ItemsGrid = ({ type }) => {
  const allMovies = usefilteredType(movieData, type);
  const {
    availableYears,
    yearFilter,
    setYearFilter,
    itemsPerPage,
    setItemsPerPage,
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedMovies,
  } = useMovieFilters(allMovies);

  return (
    <Box
      sx={{
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mb: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          marginBottom: 3,
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <TextField
          select
          label="Año mínimo"
          variant="outlined"
          value={yearFilter}
          onChange={(e) => setYearFilter(Number(e.target.value))}
          sx={{ minWidth: 150 }}
        >
          {availableYears.map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          label="Elementos por página"
          variant="outlined"
          value={itemsPerPage}
          onChange={(e) => {
            setItemsPerPage(Number(e.target.value));
            setCurrentPage(1);
          }}
          sx={{ minWidth: 150 }}
        >
          {[5, 10, 15, 20].map((size) => (
            <MenuItem key={size} value={size}>
              {size}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      <Grid container spacing={2} justifyContent="center">
        {paginatedMovies.length > 0 ? (
          paginatedMovies.map((movie, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={2}>
              <ItemCard
                title={movie.title}
                description={movie.description}
                imageUrl={movie.images}
                releaseYear={movie.releaseYear}
                programType={movie.programType}
              />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              sx={{ marginTop: 4 }}
            >
              No movies found for this type or year.
            </Typography>
          </Grid>
        )}
      </Grid>
      {totalPages > 1 && (
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(event, value) => setCurrentPage(value)}
            color="primary"
          />
        </Box>
      )}
    </Box>
  );
};

export default ItemsGrid;
