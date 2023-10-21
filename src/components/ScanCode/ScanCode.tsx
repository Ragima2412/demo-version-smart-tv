import React from "react";
import "./ScanCode.scss";
import QRCode from "../QRCode/QRCode";

const ScanCode = () => {
  return (
    <div className="scancode">
      <p className="scancode__info">
        Сканируйте QR-код для получения дополнительной информации
      </p>
      <QRCode />
    </div>
  );
};
export default ScanCode;
