export const validatePhoneNumber = (phoneNumber: string) =>  {
    const regex = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
    return regex.test(phoneNumber);
  }