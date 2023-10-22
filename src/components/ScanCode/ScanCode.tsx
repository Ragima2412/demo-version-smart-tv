import React from "react";
import QRCode from "../QRCode/QRCode";
import "./ScanCode.scss";

const ScanCode = () => {
  return (
    <div className="scancode">
      <p className="scancode__info">
        Сканируйте QR-код для получения дополнительной информации
      </p>
      <QRCode styles={{weight: '110px', height: '110px'}} />
    </div>
  );
};
export default ScanCode;
