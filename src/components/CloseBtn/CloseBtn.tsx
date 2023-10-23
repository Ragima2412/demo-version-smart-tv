import React from "react";
import { useNavigate } from "react-router-dom";
import "./CloseBtn.scss";

const CloseBtn = () => {
  const navigate = useNavigate();
  const onClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <button className="close-btn button" onClick={(e) => onClick(e)}>
      <div className="close-btn__cross cross">
        <div className="cross__diag1"></div>
        <div className="cross__diag2"></div>
      </div>
    </button>
  );
};
export default CloseBtn;
