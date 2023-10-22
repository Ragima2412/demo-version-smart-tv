import React, { FC, useEffect, useState } from "react";
import { DialPanelValue, IDialPanel } from "../../types/types";
import DialPanelItem from "../DialPanelItem/DialPanelItem";
import "./DialPanel.scss";

const DialPanel: FC<IDialPanel> = ({ setDialedNumber }) => {
  const [valuesList, setValuesList] = useState<DialPanelValue[]>();

  useEffect(() => {
    let numberRange = Array.from(
      { length: 10 },
      (_, index) => index
    ) as Array<DialPanelValue>;
    const [zero, ...rest] = numberRange;
    setValuesList([...rest, "стереть", zero]);
  }, []);

  return (
    <div className="dial-panel">
      {valuesList?.map((val, idx) => (
        <div className="dial-panel__btn" onClick={() => setDialedNumber(val)}>
          <DialPanelItem value={val} key={idx} />
        </div>
      ))}
    </div>
  );
};
export default DialPanel;
