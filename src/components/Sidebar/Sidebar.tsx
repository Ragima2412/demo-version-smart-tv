import React, { useEffect, useLayoutEffect, useState } from "react";
import { validatePhoneNumber } from "../../helper/validationNumber";
import { useNavigate } from "react-router-dom";
import SubmitInfo from "../SubmitInfo/SubmitInfo";
import Form from "../Form/Form";
import { setInActivityTimer } from "../../helper/setInActivityTimer";
import { DialPanelValue } from "../../types/types";
import "./Sidebar.scss";

const Sidebar = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState<string>(
    "+7(_ _ _)_ _ _ -_ _ -_ _"
  );
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    setInActivityTimer();

    const handleKeyPress = (e) => {
      if (e.key >= "0" && e.key <= "9") {
        setDialedNumber(parseInt(e.key))
      } 
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [phoneNumber]);

  const setDialedNumber = (value: DialPanelValue) => {
    if (typeof value === "number") {
      const phoneArr = [...phoneNumber];
      const itemIdx = phoneArr.findIndex((sym) => sym === "_");
      if (itemIdx) {
        phoneArr[itemIdx] = String(value);
      }
      setPhoneNumber(phoneArr.join("").replace(/\s/g, ""));
    } else {
      setIsError(false);
      setPhoneNumber("+7(_ _ _)_ _ _ -_ _ -_ _");
    }
  };

  const checkEmptySpaces = (phoneNumber: string) => {
    return phoneNumber.includes("_");
  };

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const isPhoneNumValid = validatePhoneNumber(phoneNumber);
    if (isPhoneNumValid) {
      setIsSubmitted(true);
      navigate("/success");
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
