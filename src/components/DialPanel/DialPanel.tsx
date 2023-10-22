import React, { FC, useEffect, useRef, useState } from "react";
import { DialPanelValue, IDialPanel } from "../../types/types";
import DialPanelItem from "../DialPanelItem/DialPanelItem";
import "./DialPanel.scss";

const DialPanel: FC<IDialPanel> = ({ setDialedNumber, setIsError }) => {
  const [valuesList, setValuesList] = useState<DialPanelValue[]>();
  // const [isBtnClicked, setIsBtnClicked] = useState<boolean>(false);

  useEffect(() => {
    let numberRange = Array.from(
      { length: 10 },
      (_, index) => index
    ) as Array<DialPanelValue>;
    const [zero, ...rest] = numberRange;
    setValuesList([...rest, "стереть", zero]);
  }, []);

//   var clickCounter = 100;

//   function fnTrackClick(){
//     console.log('clikc', clickCounter)
//     if(isBtnClicked){
//        clickCounter--;
//        setTimeout( fnTrackClick, clickCounter * 100);
//     }
//  }

  return (
    <div className="dial-panel">
      {valuesList?.map((val, idx) => (
        <div
          className="dial-panel__btn"
          onClick={() => setDialedNumber(val)}
          // onMouseDown={() => setIsBtnClicked(true)}
          // onMouseUp={() => setIsBtnClicked(false)}
          // onMouseLeave={() => setIsBtnClicked(false)}
          // onMouseOver={() => fnTrackClick()}
        >
          <DialPanelItem value={val} key={idx} />
        </div>
      ))}
    </div>
  );
};
export default DialPanel;
