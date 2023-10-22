export interface IBanner {
  isVisible: boolean;
}
export interface IDialPanelItem {
  value: DialPanelValue,
}
export interface IDialPanel {
  setDialedNumber: (val: DialPanelValue) => void,
  setIsError: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ICheckbox {
  label: string;
  isChecked: boolean;
  toggleCheckbox: () => void;
}
export interface IQRCode {
  styles: { 
  weight: string,
  height: string
}
} 
export type DialPanelValue = string | number;
