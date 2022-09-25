import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import "./NumberOfPro.css";
export default function NumberOfPro(props) {
  return (
    <div className="thirdProAdvertise">
      <h2>{props.title}</h2>
      <p style={{ margin: "2rem 0" }}>Məhsul sayı: {props.number}</p>
      <p style={{ color: "blue" }}>
        Məhsullara keçid <FontAwesomeIcon icon={faChevronRight} />
      </p>
      <img src={props.img} />
    </div>
  );
}
