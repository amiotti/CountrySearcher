import React from "react";

function CountryDetail({ props }) {
  return (
    <div className="details">
      <div className="info">
        <img src={props.flag} className="flags"></img>
        <ul>Name:{props.name}</ul>
        <ul>Native Name: {props.nativeName}</ul>
        <ul>Population:{props.population}</ul>
        <ul>Region:{props.region}</ul>
        <ul>Sub-Region:{props.subregion}</ul>
        <ul>Capital:{props.capital}</ul>
        <ul>Top Level Domain:{props.topLevelDomain}</ul>
        <ul>Currencies:{props.currencies[0].name}</ul>
        <ul>Language:{props.languages[0].name}</ul>
      </div>
    </div>
  );
}

export default CountryDetail;
