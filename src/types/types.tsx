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
export interface IQRCode {
  styles: {
    weight: string;
    height: string;
  };
}

export interface IForm {
  phoneNumber: string;
  setDialedNumber: (val: DialPanelValue) => void;
  isError: boolean;
  isChecked: boolean;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
  toggleCheckbox: () => void;
  onSubmit: () => void;
  checkEmptySpaces: (val: string) => void;
}

export type DialPanelValue = string | number;
