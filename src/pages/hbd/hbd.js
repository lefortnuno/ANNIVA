import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Anniva from "../anniva/anniva";

import "./hbd.css";

export default function HBD() {
  //#region //-variable
  const navigate = useNavigate();
  const [showGlitter, setShowGlitter] = useState(true);

  const numRibbons = 9;
  //#endregion

  // Generate ribbon elements
  const renderRibbons = () => {
    return Array.from({ length: numRibbons }, (_, index) => (
      <div className="ribbon" key={index}></div>
    ));
  };

  //#region //-html
  return (
    <>
      <div className="countdown-background yes">
        {showGlitter && (
          <div className="ribbon-container">{renderRibbons()}</div>
        )}
      </div>

      <div style={{ width: "100%", height: "100vh" }}>
        <iframe
          src="/gift.html" // Chemin vers le fichier HTML dans public
          style={{ width: "100%", height: "100%", border: "none" }}
          title="External Page"
        />
      </div>
    </>
  );
  //#endregion
}
