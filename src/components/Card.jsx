import React from "react";
import "./Card.css";
import phone from "../imgs/phone.png";
import priceSymbol from "../imgs/azn symbol.png";
export default function Card() {
  return (
    <div className="card">
      <div className="card-info">
        <img src={phone} />
        <h4>Apple iPhone 12, 64 GB, Purple</h4>
        <p className="price">
          3192
          <img
            src={priceSymbol}
            style={{ height: "15px", width: "18px", marginLeft: "7px" }}
          />
        </p>
      </div>
    </div>
  );
}
