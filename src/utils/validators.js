export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validateZip = (zip) => {
  const re = /^\d{5}$/;
  return re.test(zip);
};

export const validateRequired = (value) => {
  return value && value.trim().length > 0;
};

export const validateAge = (isChecked) => {
  return isChecked;
};

export const validateTerms = (isChecked) => {
  return isChecked;
};