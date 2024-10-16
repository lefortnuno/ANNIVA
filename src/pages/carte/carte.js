import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import HBD from "../hbd/hbd";

import "./carte.css";

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
      <h4 onClick={onHandleClick}> Happy Birth Day Carte</h4>
    </HBD>
  );
  //#endregion
}
