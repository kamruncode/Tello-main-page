import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";

export default function Main(props) {
  let arr = [1, 2, 3, 4];
  return (
    <div>
      <div className="general-container">
        <div className="container">
          <div className="most-saled">
            <p>{props.mostS}</p>
            <p className="all-sales">
              Hamısına bax <FontAwesomeIcon icon={faChevronRight} />
            </p>
          </div>
          <div className="flex-between">
            {arr.map((e) => {
              return <Card />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
