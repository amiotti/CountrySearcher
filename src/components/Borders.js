import React from "react";
import CountryDetail from "./CountryDetail";
import { Link } from "react-router-dom";

function Borders({ filterBoarder }) {
  if (filterBoarder === "N/A") {
    return "N/A";
  } else {
    return filterBoarder.map((b) => (
      <Link to={`/country/${b[0].name}`}>
        <span>{" " + b[0].name + ", "}</span>
      </Link>
    ));
  }
}

export default Borders;
