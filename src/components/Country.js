import React from "react";
import { Link } from "react-router-dom";
import "./Country.css";

function Country({ flags, name, population, continent, capital }) {
  return (
    <div className="country">
      <img src={flags} className="flags"></img>
      <div className="info">
        <Link to={`/country/${name}`}>
          <ul>{name}</ul>
        </Link>
        <ul>Population:{population}</ul>
        <ul>Continent:{continent}</ul>
        <ul>Capital:{capital}</ul>
      </div>
    </div>
  );
}

export default Country;
