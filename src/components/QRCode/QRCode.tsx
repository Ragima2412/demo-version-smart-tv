import React from "react";
import QrCodeIcon from "../../assets/images/qr-code.png";
import "./QRCode.scss";

const QRCode = () => {
  return (
    <div className="qr-code">
      <img className="qr-code__icon" src={QrCodeIcon} alt="qr-code" />
    </div>
  );
};
export default QRCode;
