import React from "react";
import Country from "./Country";
import "./AllCountries.css";

function AllCountries({ countries, search, filteredCountries }) {
  let pais;

  if (search.length === filteredCountries.length) {
    pais = countries.map((e) => (
      <Country
        flags={e.flags["svg"]}
        name={e.name}
        population={e.population}
        continent={e.region}
        capital={e.capital}
        key={e.alpha3Code}
      />
    ));
  } else if (search.length !== 0) {
    pais = search.map((e) => (
      <Country
        flags={e.flags["svg"]}
        name={e.name}
        population={e.population}
        continent={e.region}
        capital={e.capital}
        key={e.alpha3Code}
      />
    ));
  } else if (filteredCountries.length !== 0) {
    pais = filteredCountries.map((e) => (
      <Country
        flags={e.flags["svg"]}
        name={e.name}
        population={e.population}
        continent={e.region}
        capital={e.capital}
        key={e.alpha3Code}
      />
    ));
  }

  return <div className="countries">{pais}</div>;
}

export default AllCountries;
