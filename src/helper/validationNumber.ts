import {
  isValidPhoneNumber,
} from 'libphonenumber-js';


export const validatePhoneNumber = (phoneNumber: string) =>  {
  return isValidPhoneNumber(phoneNumber, 'RU')
}