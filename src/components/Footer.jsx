import React from "react";
import tello from "../imgs/tello.png";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopyright,
  faEnvelope,
  faHashtag,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
  return (
    <div className="Footer">
      <div className=" general-container">
        <div className="container flex-between ">
          <div className="logo-social  wrap">
            <img src={tello} />
            <ul className="flex-between">
              <li>
                <FontAwesomeIcon icon={faHashtag} />
              </li>
              <li>
                <FontAwesomeIcon icon={faHashtag} />
              </li>
              <li>
                <FontAwesomeIcon icon={faHashtag} />
              </li>
              <li>
                <FontAwesomeIcon icon={faHashtag} />
              </li>
            </ul>
          </div>

          <ul className="footprop">
            <h2>Menu</h2>
            <li>Yeni</li>
            <li>Endirimlər</li>
            <li>Aksessuarlar</li>
            <li>Bütün brendlər</li>
          </ul>
          <ul className="footprop">
            <h2>Kömək</h2>
            <li>Tez-tez soruşulan suallar</li>
            <li>Çatdırılma xidməti</li>
            <li>Geri qaytarılma şərtləri</li>
          </ul>
          <ul className="footprop contact">
            <h2>Əlaqə</h2>
            <li>
              <FontAwesomeIcon icon={faLocationDot} className="icon" />
              M. K. Ataturk avenue 89, Baku, Azerbaijan
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              example@gmail.com
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} className="icon" />
              *2108
            </li>
          </ul>
        </div>
      </div>
      <div className="downbar general-container">
        <div className="container flex-between ">
          <div>
            <FontAwesomeIcon icon={faCopyright} /> PeojectX 2021. Bütün hüquqlar
            qorunur.
          </div>
          <div className="rules">
            <p>Qaydalar və şərtlər</p>
            <p>Məxfilik siyasəti</p>
          </div>
        </div>
      </div>
    </div>
  );
}
