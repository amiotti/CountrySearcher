import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import AllCountries from "./components/AllCountries";

import CountryDetail from "./components/CountryDetail";

function App() {
  const [input, setInput] = useState("");
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then((r) => r.json())
      .then((data) => {
        if (data !== undefined) {
          setCountries(data);
        } else {
          alert("Can´t Load Data");
        }
      });
  }, []);

  function onSearch(name) {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then((r) => r.json())
      .then((data) => {
        setSearch(data);
      });
  }

  //everytime I select a region (status state changes), filterHandler is called
  useEffect(() => {
    filterHandler();
  }, [status]);

  function filterHandler() {
    switch (status) {
      case "Americas":
        setFilteredCountries(
          countries.filter((country) => country.region === "Americas")
        );
        console.log(filteredCountries);
        break;
      case "Asia":
        setFilteredCountries(
          countries.filter((country) => country.region === "Asia")
        );
        break;
      case "Africa":
        setFilteredCountries(
          countries.filter((country) => country.region === "Africa")
        );
        break;
      case "Europe":
        setFilteredCountries(
          countries.filter((country) => country.region === "Europe")
        );
        break;
      case "Oceania":
        setFilteredCountries(
          countries.filter((countries) => countries.region === "Oceania")
        );
        break;
      case "All":
        setFilteredCountries(
          countries.filter((countries) => countries.region === "All")
        );
        break;
    }
  }

  function onFilter(name) {
    let country = countries.filter((c) => c.name === name);
    if (countries.length > 0) {
      return country[0];
    } else {
      return null;
    }
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      <Router>
        <Route exact path="/" component={Navbar} />

        <Route
          exact
          path="/"
          render={() => (
            <Form
              onSearch={onSearch}
              setInput={setInput}
              setSearch={setSearch}
              input={input}
              setStatus={setStatus}
            />
          )}
        />

        <Route
          exact
          path="/"
          render={() => (
            <AllCountries
              countries={countries}
              search={search}
              filteredCountries={filteredCountries}
            />
          )}
        />

        <Route
          exact
          path="/country/:name"
          render={({ match }) => (
            <CountryDetail props={onFilter(match.params.name)} />
          )}
        />
      </Router>
    </div>
  );
}

export default App;
