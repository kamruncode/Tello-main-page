import React from "react";
import slider from "../imgs/image 8.png";
import Main from "../components/main";
import adver1 from "../imgs/adver1.png";
import adver2 from "../imgs/adver2.png";
import NumberOfPro from "../components/NumberOfPro";
import smartwatch from "../imgs/smartwatch.png";
import phoneAccer from "../imgs/phoneaccer.png";
import KargoCartInfo from "../components/KargoCartInfo";
import {
  faBoxArchive,
  faCreditCard,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
export default function MainPage() {
  return (
    <div>
      <div className="general-container">
        <img src={slider} style={{ width: "100vw" }} />
      </div>
      <Main mostS="Ən çox satılan məhsullar" />
      <Main mostS="Yeni gələn məhsullar" />
      <div className="general-container">
        <div className="container flex-between">
          <img src={adver1} />
          <img src={adver2} />
        </div>
      </div>
      <Main mostS="Yeni gələn aksessuarlar" />

      <div className="general-container">
        <div className="container flex-between wrap">
          <NumberOfPro title="Smart Saat" number="322" img={smartwatch} />
          <NumberOfPro title="Telefon" number="46" img={phoneAccer} />
          <NumberOfPro title="Saat" number="322" img={smartwatch} />
          <NumberOfPro title="Aksesuar" number="891" img={smartwatch} />
        </div>
      </div>
      <div className="general-container">
        <div className="container flex-between wrap">
          <KargoCartInfo icon={faBoxArchive} title="Çatdırlma" />
          <KargoCartInfo icon={faCreditCard} title="Kredit" />
          <KargoCartInfo icon={faMedal} title="Zəmanət" />
        </div>
      </div>
    </div>
  );
}
