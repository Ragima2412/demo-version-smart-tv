import React from "react";
import "./CloseBtn.scss";
import { Link } from "react-router-dom";

const CloseBtn = () => {
  return (
    <Link to="/" className="close-btn button">
      <div className="close-btn__cross cross">
        <div className="cross__diag1"></div>
        <div className="cross__diag2"></div>
      </div>
    </Link>
  );
};
export default CloseBtn;
