import React, { useEffect, useRef } from "react";
import song from "../../assets/audio/kimi.mp3";
import "./hbd.css";

export default function HBD({ children, isPlay }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlay && audioRef.current) {
      audioRef.current.volume = 0.1; // Volume à 10%
      audioRef.current.play().catch((error) => {
        console.log("Erreur de lecture:", error);
      });
    }
  }, [isPlay]); // Trigger play only when isPlay becomes true

  return (
    <div className="d-flex justify-content-center align-items-center coprs">
      <audio ref={audioRef} src={song} loop />
      <div>{children}</div>
    </div>
  );
}
