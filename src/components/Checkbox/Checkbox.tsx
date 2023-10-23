import React from "react";
import { ICheckbox } from "../../types/types";
import "./Checkbox.scss";

const Checkbox: React.FC<ICheckbox> = ({ isChecked, toggleCheckbox, label }) => {
 
  const onCheckBoxClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    toggleCheckbox()
  };
    return (
        <div className="custom-checkbox">
        <label className="custom-checkbox__label">
          <input
            className="custom-checkbox__input"
            type="checkbox"
            checked={isChecked}
            onChange={toggleCheckbox}
          />
          <button className="custom-checkbox__checkmark button" onClick={(e) => onCheckBoxClick(e)}></button>
          {label}
        </label>      
        </div>
    )
  }
export default Checkbox;
