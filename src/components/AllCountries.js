import React, { useState, useEffect } from "react";
import Country from "./Country";
import "./AllCountries.css";

function AllCountries({ countries, search, filteredCountries }) {
  let pais;

  if (search.length === filteredCountries.length) {
    pais = countries.map((e) => (
      <Country
        flag={e.flag}
        name={e.name}
        population={e.population}
        region={e.region}
        capital={e.capital}
        id={parseInt(e.callingCodes)}
      />
    ));
  } else if (search.length !== 0) {
    pais = search.map((e) => (
      <Country
        flag={e.flag}
        name={e.name}
        population={e.population}
        region={e.region}
        capital={e.capital}
        id={parseInt(e.callingCodes)}
      />
    ));
  } else if (filteredCountries.length !== 0) {
    pais = filteredCountries.map((e) => (
      <Country
        flag={e.flag}
        name={e.name}
        population={e.population}
        region={e.region}
        capital={e.capital}
        id={parseInt(e.callingCodes)}
      />
    ));
  }

  return <div className="countries">{pais}</div>;
}

export default AllCountries;
