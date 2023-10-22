import React from "react";
import "./Checkbox.scss";
import { ICheckbox } from "../../types/types";

const Checkbox: React.FC<ICheckbox> = ({ isChecked, toggleCheckbox, label }) => {
 
    return (
        <div className="custom-checkbox">
        <label className="custom-checkbox__label">
          <input
            className="custom-checkbox__input"
            type="checkbox"
            checked={isChecked}
            onChange={toggleCheckbox}
          />
          <span className="custom-checkbox__checkmark"></span>
          {label}
        </label>      

        </div>
    )
  }
export default Checkbox;
