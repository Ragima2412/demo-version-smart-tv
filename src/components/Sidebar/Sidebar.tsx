import React, { useState } from "react";
import DialPanel from "../DialPanel/DialPanel";
import { DialPanelValue } from "../../types/types";
import "./Sidebar.scss";
import Checkbox from "../Checkbox/Checkbox";

const Sidebar = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("+7(_ _ _)_ _ _ -_ _ -_ _");
  const [isChecked, setIsChecked] = useState<boolean>(false);
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

  const checkEmptySpaces = (phoneNumber: string) => {
   return phoneNumber.includes('_')
  }
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
const onSubmit = () => {
    setIsSubmitted(true);
}
console.log('isError', isError)
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
            Введите ваш номер мобильного телефона
          </h3>
          <p className="form__dialed-number">{phoneNumber}</p>
          <p className="form__information">
            и с Вами свяжется наш менеджер для дальнейшей консультации
          </p>      
            <DialPanel setDialedNumber={setDialedNumber} setIsError={setIsError}/>
            {isError && <p className="form__error">неверно введен номер</p>}
          <Checkbox isChecked={isChecked} toggleCheckbox={toggleCheckbox} label={'Согласие на обработку персональных данных'}/>     
          <button className="form__submit-btn" disabled={checkEmptySpaces(phoneNumber) || !isChecked} onClick={onSubmit}>
            Подтвердить номер</button>
        </form>
      )}
    </div>
  );
};
export default Sidebar;
