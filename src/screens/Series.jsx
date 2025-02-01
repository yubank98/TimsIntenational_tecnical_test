import React from "react";
import ItemsGrid from "../components/ItemsGrid";

const Series = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "40px 0" }}>Popular Series</h1>
      <ItemsGrid type="series" />
    </div>
  );
};

export default Series;
