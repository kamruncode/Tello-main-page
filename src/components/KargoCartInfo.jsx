import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./KargoCartInfo.css";
export default function KargoCartInfo(props) {
  return (
    <div className="KargoCartInfo ">
      <FontAwesomeIcon
        icon={props.icon}
        style={{ fontSize: "4rem", color: "#2DD06E" }}
      />
      <h3>{props.title}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
        cupiditate rem?
      </p>
    </div>
  );
}
