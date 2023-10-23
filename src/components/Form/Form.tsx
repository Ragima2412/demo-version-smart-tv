import React from "react";
import "./Form.scss";
import DialPanel from "../DialPanel/DialPanel";
import Checkbox from "../Checkbox/Checkbox";

const Form = ({
  phoneNumber,
  setDialedNumber,
  isError,
  isChecked,
  toggleCheckbox,
  onSubmit,
  checkEmptySpaces,
}) => {
  return (
    <form className="sidebar__form form">
      <h3 className="form__header">Введите ваш номер мобильного телефона</h3>
      <p
        className={
          isError ? "form__dialed-number--error" : "form__dialed-number"
        }
      >
        {phoneNumber}
      </p>
      <p className="form__information">
        и с Вами свяжется наш менеджер для дальнейшей консультации
      </p>
      <DialPanel setDialedNumber={setDialedNumber} />
      {isError && <p className="form__error">неверно введен номер</p>}
      <Checkbox
        isChecked={isChecked}
        toggleCheckbox={toggleCheckbox}
        label={"Согласие на обработку персональных данных"}
      />
      <button
        className="form__submit-btn button"
        disabled={checkEmptySpaces(phoneNumber) || !isChecked}
        onClick={(e) => onSubmit(e)}
      >
        Подтвердить номер
      </button>
    </form>
  );
};
export default Form;
