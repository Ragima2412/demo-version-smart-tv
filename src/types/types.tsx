export interface IBanner {
  isVisible: boolean;
}
export interface IDialPanelItem {
  value: DialPanelValue;
}
export interface IDialPanel {
  setDialedNumber: (val: DialPanelValue) => void;
}

export interface ICheckbox {
  label: string;
  isChecked: boolean;
  toggleCheckbox: () => void;
}

export type DialPanelValue = string | number;
