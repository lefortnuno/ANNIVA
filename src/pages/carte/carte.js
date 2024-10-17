import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import HBD from "../hbd/hbd";

import birthday from "../../assets/images/birthday.png";
import candles from "../../assets/gif/candles.gif";
import heart from "../../assets/gif/heart.gif";
import zelina from "../../assets/images/zelina.png";

import "./carte.css";
import { BiCake } from "react-icons/bi";

export default function Carte() {
  //#region //-variable
  const navigate = useNavigate();
  //#endregion

  const onHandleClick = () => {
    navigate("/");
  };

  //#region //-html
  return (
    <HBD isPlay={true}>
      <div className="birthday-card">
        <div className="back">
          <div className="b-top">
            <img src={candles} className="candles" />
          </div>
          <div className="b-bottom">
            <img src={heart} className="heart" onClick={onHandleClick} />
            <img src={zelina} className="zelina" />
          </div>
        </div>

        <div className="front">
          <img src={birthday} />
        </div>

        {/* <!-- Text --> */}
        <div className="text">
          <p className="title">Tsingerin-Taona!</p>
          <p>
            Koa indro tonga ary anio, Lay nandrandrainao hatry ny elà Dia tsaroy
            sy tadidio Ataovy rakitra tavela.
          </p>
          <p>Mirary soa zandry ah!</p>
        </div>
      </div>
    </HBD>
  );
  //#endregion
}
