import React from "react";
import "./Overlay.css";

const Overlay = ({ isVisible, onClose }) => {
  return isVisible ? <div className="overlay" onClick={onClose}></div> : null;
};

export default Overlay;
