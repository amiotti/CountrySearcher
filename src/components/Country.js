import React from "react";
import { Link } from "react-router-dom";
import "./Country.css";

function Country({ flags, name, population, region, capital }) {
  return (
    <div className="country">
      <img src={flags[0]} className="flags"></img>
      <div className="info">
        <Link to={`/country/${name}`}>
          <ul>{name}</ul>
        </Link>
        <ul>Population:{population}</ul>
        <ul>Region:{region}</ul>
        <ul>Capital:{capital}</ul>
      </div>
    </div>
  );
}

export default Country;
