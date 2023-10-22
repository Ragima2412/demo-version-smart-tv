import React, { useState } from "react";
import { validatePhoneNumber } from "../../helper/validationNumber";
import SubmitInfo from "../SubmitInfo/SubmitInfo";
import Form from "../Form/Form";
import "./Sidebar.scss";
import { DialPanelValue } from "../../types/types";

const Sidebar = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("+7(_ _ _)_ _ _ -_ _ -_ _");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
 
  console.log(phoneNumber)
  const setDialedNumber = (value: DialPanelValue) => {
    if (typeof value === "number") {
      const phoneArr = [...phoneNumber];
      const itemIdx = phoneArr.findIndex((sym) => sym === "_");
      if (itemIdx) {
        phoneArr[itemIdx] = String(value);
      }
      setPhoneNumber(phoneArr.join('').replace(/\s/g, ''));
    } else {
      setIsError(false);
      setPhoneNumber("+7(_ _ _)_ _ _ -_ _ -_ _");
    }
  };

  const checkEmptySpaces = (phoneNumber: string) => {
   return phoneNumber.includes('_')
  }

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  
  const onSubmit = (event) => {
  event.preventDefault()
  const isPhoneNumValid = (validatePhoneNumber(phoneNumber));
  if(isPhoneNumValid) {
    setIsSubmitted(true)
  } else {
    setIsError(true);
  }
};

  return (
    <div className="sidebar">
      {isSubmitted ? (
        <SubmitInfo />
      ) : (
        <Form 
        phoneNumber={phoneNumber}
        setDialedNumber={setDialedNumber}
        isError={isError}
        isChecked={isChecked}
        onSubmit={onSubmit}
        toggleCheckbox={toggleCheckbox}
        checkEmptySpaces={checkEmptySpaces}
        />     
      )}
    </div>
  );
};
export default Sidebar;
