import React, { FC } from "react";
import QrCodeIcon from "../../assets/images/qr-code.png";
import { IQRCode } from "../../types/types";
import "./QRCode.scss";

const QRCode:FC<IQRCode> = ({styles}) => {
  return (
    <div className="qr-code" style={styles}>
      <img className="qr-code__icon" src={QrCodeIcon} alt="qr-code" />
    </div>
  );
};
export default QRCode;
