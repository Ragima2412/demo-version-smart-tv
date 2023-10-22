import React, { useState } from "react";
import DialPanel from "../DialPanel/DialPanel";
import { DialPanelValue } from "../../types/types";
import "./Sidebar.scss";

const Sidebar = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("+7(_ _ _)_ _ _ -_ _ -_ _");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const setDialedNumber = (value: DialPanelValue) => {
    if (typeof value === "number") {
      const phoneArr = [...phoneNumber];
      const itemIdx = phoneArr.findIndex((sym) => sym === "_");
      if (itemIdx) {
        phoneArr[itemIdx] = String(value);
      }
      setPhoneNumber(phoneArr.join(''));
    } else {
      setPhoneNumber("+7(_ _ _)_ _ _ -_ _ -_ _");
    }
  };

  return (
    <div className="sidebar">
      {isSubmitted ? (
        <div className="sidebar__submit-info submit-info">
          <h1 className="submit-info__title">Заявка принята</h1>
          <p className="submit-info__notice">Держите телефон под рукой.</p>
          <p className="submit-info__notice">
            Скоро с Вами свяжется наш менеджер.
          </p>
        </div>
      ) : (
        <form className="sidebar__form form">
          <h3 className="form__header">
            {" "}
            Введите ваш номер мобильного телефона
          </h3>
          <p className="form__dialed-number">{phoneNumber}</p>
          <p className="form__information">
            И с вами свяжется наш менеджер для дальнейшей консультации
          </p>
          <div className="form__dial-code">
            <DialPanel setDialedNumber={setDialedNumber} />
          </div>
          <div className="form__checkbox-wrapper">
            <input className="form__checkbox" type="checkbox" />
            <label className="form__label">
              Согласие на обработку персональных данных
            </label>
          </div>
          <button className="form__submit-btn">Подтвердить номер</button>
        </form>
      )}
    </div>
  );
};
export default Sidebar;
