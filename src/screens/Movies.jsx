import React from "react";
import ItemsGrid from "../components/ItemsGrid";

const Movies = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "40px 0" }}>Popular Movies</h1>
      <ItemsGrid type="movie" />
    </div>
  );
};

export default Movies;
