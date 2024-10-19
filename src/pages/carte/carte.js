import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Anniva from "../anniva/anniva";

import birthday from "../../assets/images/birthday.png";
import candles from "../../assets/gif/candles.gif";
import heart from "../../assets/gif/heart.gif";
import zelina from "../../assets/images/zelina.png";
import Tonokalo from "../bonus/tonokalo";
import Bonus from "../bonus/bonus";
import HBD from "../hbd/hbd";

import "./carte.css";

export default function Carte() {
  //#region //-variable
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const [isBirthday, setBirthday] = useState(false);
  const [isPageTurned, setTurnPage] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [isClickable, setIsClickable] = useState(false);
  const [showGlitter, setShowGlitter] = useState(false);
  const [fade, setFade] = useState("fade-in");

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

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const onHandleClick = () => {
    navigate("/");
  };

  const hbdZelina = () => {
    setOpen(false);
    const timer = setTimeout(() => {
      setBirthday(true);
    }, 1700); // 1.5s avant qu'apparaisse le Gift
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    if (isBirthday) {
      const timer = setTimeout(() => {
        setBirthday(false);
      }, 27000); //duree 27s
      return () => clearTimeout(timer);
    }
  }, [isBirthday]);

  const openBook = () => {
    if (isClickable) {
      setOpen(!isOpen);
    }
  };

  const ajustBookPage = () => {
    setTurnPage(!isPageTurned);
  };

  const turnBookPage = () => {
    ajustBookPage();
    setTurnPage(!isPageTurned);
  };

  // Generate ribbon elements
  const renderRibbons = () => {
    return Array.from({ length: numRibbons }, (_, index) => (
      <div className="ribbon" key={index}></div>
    ));
  };

  //#region //-html
  return (
    <Anniva isPlay={true}>
      <div className={`countdown-background ${isClickable ? "yes" : ""}`}>
        {countdown > 0 && <h2 className="countdown-text">{countdown}</h2>}
        {showGlitter && (
          <div className="ribbon-container">{renderRibbons()}</div>
        )}
      </div>

      {!isBirthday ? (
        <div
          className={`birthday-card ${isOpen ? "active" : ""} ${fade}`}
          style={{ pointerEvents: isClickable ? "auto" : "none" }}
        >
          <div className={`back ${isOpen ? "active" : ""}`}>
            <div className="b-top" onClick={hbdZelina}>
              <img src={candles} className="candles" />
            </div>
            <div className="b-bottom">
              <img src={heart} className="heart" onClick={onHandleClick} />
              <img src={zelina} className="zelina" onClick={openBook} />
            </div>
          </div>

          <div className={`front ${isOpen ? "active" : ""}`}>
            <img src={birthday} />
          </div>

          {/* <!-- Right Side --> */}
          <div
            className={`text ${isPageTurned ? "pageTurned" : ""} ${fade}`}
            onClick={turnBookPage}
          >
            {isPageTurned ? <Bonus /> : <Tonokalo />}
          </div>
        </div>
      ) : (
        <div className={fade}>
          <HBD />
        </div>
      )}
    </Anniva>
  );
  //#endregion
}
