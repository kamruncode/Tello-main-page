import React from "react";
import "./Navbar.css";
import tello from "../imgs/tello.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <section className="general-container nav">
      <div className="container">
        <header className="header">
          <img src={tello} className="logo" />
          <div className="search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" placeholder="Axtarış..." />
          </div>
          <div className="user-info">
            <FontAwesomeIcon icon={faUser} />
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faCartShopping} />
            <p className="numberOfpro">0</p>
          </div>
        </header>
        <nav>
          <ul>
            <li>Yeni</li>
            <li>Apple</li>
            <li>Samsung</li>
            <li>Xiaomi</li>
            <li>Redmi</li>
            <li>Bütün Brendlər</li>
            <li>Aksesuarlar</li>
            <li>Endirimlər</li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
