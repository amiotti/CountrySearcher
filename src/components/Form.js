import React, { useEffect } from "react";
import "./Form.css";

function Form({ onSearch, input, setInput, setSearch, setStatus }) {
  function inputHandler(e) {
    setInput(e.target.value);
    onSearch(e.target.value);
  }

  useEffect(() => {
    //when the input field is empty, it resets the state
    if (input.length === 0) setSearch([]);
  }, [input]);

  function statusHandler(e) {
    setStatus(e.target.value);
  }

  return (
    <form className="form">
      <input
        type="text"
        value={input}
        placeholder="Search for a country..."
        onChange={inputHandler}
      ></input>

      <select onChange={statusHandler} name="region">
        <option disabled selected>
          Filter by Region
        </option>
        <option defaultValue="All">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </form>
  );
}

export default Form;
