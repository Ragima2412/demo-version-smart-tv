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
  isError: boolean;
  isChecked: boolean;
  isDisabled: boolean;
  onSubmit: (e) => void;
  toggleCheckbox: () => void;
  setDialedNumber: (val: DialPanelValue) => void;
}

export interface IKeyboardNavigation {
  btnElements?: NodeListOf<Element> | undefined;
}

export type DialPanelValue = string | number;
