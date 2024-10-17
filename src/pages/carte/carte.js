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
  const [isOpen, setOpen] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [isClickable, setIsClickable] = useState(false);
  const [showGlitter, setShowGlitter] = useState(false);
  const numRibbons = 9;
  //#endregion

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setIsClickable(true);
      setOpen(true);
      setShowGlitter(true);
    }
  }, [countdown]);

  const onHandleClick = () => {
    navigate("/");
  };

  const openBook = () => {
    if (isClickable) {
      setOpen(!isOpen);
    }
  };

  // Generate ribbon elements
  const renderRibbons = () => {
    return Array.from({ length: numRibbons }, (_, index) => (
      <div className="ribbon" key={index}></div>
    ));
  };

  //#region //-html
  return (
    <HBD isPlay={true}>
      <div className={`countdown-background ${isClickable ? "yes" : "no"}`}>
        {countdown > 0 && <h2 className="countdown-text">{countdown}</h2>}
        {showGlitter && (
          <div className="ribbon-container">{renderRibbons()}</div>
        )}
      </div>

      <div
        className={`birthday-card ${isOpen ? "active" : "passive"}`}
        onClick={openBook}
        style={{ pointerEvents: isClickable ? "auto" : "none" }}
      >
        <div className={`back ${isOpen ? "active" : "passive"}`}>
          <div className="b-top">
            <img src={candles} className="candles" />
          </div>
          <div className="b-bottom">
            <img src={heart} className="heart" onClick={onHandleClick} />
            <img src={zelina} className="zelina" />
          </div>
        </div>

        <div className={`front ${isOpen ? "active" : "passive"}`}>
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
