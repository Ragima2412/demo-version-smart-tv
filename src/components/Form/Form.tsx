import React, { FC } from "react";
import DialPanel from "../DialPanel/DialPanel";
import Checkbox from "../Checkbox/Checkbox";
import "./Form.scss";
import { IForm } from "../../types/types";

const Form:FC<IForm> = ({
  phoneNumber,
  setDialedNumber,
  isError,
  isChecked,
  toggleCheckbox,
  onSubmit,
  isDisabled
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
        className={!isDisabled ? "form__submit-btn--disabled button": "form__submit-btn button"}
        onClick={(e) => onSubmit(e)}
      >
        Подтвердить номер
      </button>
    </form>
  );
};
export default Form;
