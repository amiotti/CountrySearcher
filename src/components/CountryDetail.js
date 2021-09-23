import React from "react";
import "./CountryDetail.css";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Link } from "react-router-dom";
import Borders from "./Borders";

function CountryDetail({ props, filterBorders, borders }) {
  //for BACK button...
  const history = useHistory();
  const handleOnClick = () => history.push("/");

  function filterBoarder(props, filterBorders) {
    if (props.borders) {
      const name = props.borders.map((country) => country);

      borders = filterBorders(name);
      return borders;
    } else return "N/A";
  }
  //handler for params which are empty or doesn´t exist
  function handler(param) {
    if (param) {
      return param;
    } else {
      return "N/A";
    }
  }

  return (
    <div className="ctn">
      <div>
        <button type="button" onClick={handleOnClick}>
          Back
        </button>
      </div>
      <div className="datactn">
        <img src={props.flags[0]} className="flag"></img>
        <div className="firstcol">
          <ul style={{ fontWeight: "bold", fontSize: "25px" }}>{props.name}</ul>
          <ul>
            <span style={{ fontWeight: "bold" }}>Native Name:</span>{" "}
            {" " + props.nativeName}
          </ul>
          <ul>
            <span style={{ fontWeight: "bold" }}>Population:</span>
            {" " + props.population}
          </ul>
          <ul>
            <span style={{ fontWeight: "bold" }}>Region:</span>
            {" " + props.region}
          </ul>

          <ul>
            <span style={{ fontWeight: "bold" }}>Capital:</span>
            {" " + props.capital}
          </ul>
        </div>
        <div className="secondcol">
          <ul>
            <span style={{ fontWeight: "bold" }}>Top Level Domain:</span>
            {" " + props.topLevelDomain}
          </ul>
          <ul>
            <span style={{ fontWeight: "bold" }}>Currencies:</span>
            {handler(props.currencies).map((curr) => ` ${curr.name}, `)}
          </ul>
          <ul>
            <span style={{ fontWeight: "bold" }}>Language:</span>
            {props.languages.map((lan) => ` ${lan.name} `)}
          </ul>

          <ul>
            <span style={{ fontWeight: "bold" }}>Border Countries:</span>
            {<Borders filterBoarder={filterBoarder(props, filterBorders)} />}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
