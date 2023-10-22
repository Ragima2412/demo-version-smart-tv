import React, { FC } from "react";
import { IDialPanelItem } from "../../types/types";
import "./DialPanelItem.scss";

const DialPanelItem: FC<IDialPanelItem> = ({ value }) => {
  return( 
  <div className="dial-panel-item"  
  >{value}
  </div>
  );
};
export default DialPanelItem;
