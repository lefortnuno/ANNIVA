import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import HBD from "../hbd/hbd";
import cake from "../../assets/gif/cake.gif";
import "./cake.css";

export default function Cake() {
  const navigate = useNavigate();
  const [isPlay, setIsPlay] = useState(false);

  const onHandleClick = () => {
    setIsPlay(true);
    navigate("/carte/");
  };

  return (
    <HBD isPlay={isPlay}>
      <img src={cake} alt="cake" onClick={onHandleClick} className="cake"/>
    </HBD>
  );
}
