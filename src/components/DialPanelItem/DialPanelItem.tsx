import React, { FC } from "react";
import { IDialPanelItem } from "../../types/types";
import "./DialPanelItem.scss";

const DialPanelItem: FC<IDialPanelItem> = ({ value }) => {
  return (
    <button className="dial-panel-item" onClick={(e) => e.preventDefault()}>
      {value}
    </button>
  );
};
export default DialPanelItem;
