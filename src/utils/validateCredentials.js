export const validateUsername = (username) => {
  const usernameRegex = /^[a-zA-Z0-9._-]{3,16}$/;
  if (!username) return { isValid: false, message: "This field is required." };
  if (!usernameRegex.test(username))
    return { isValid: false, message: "Please enter a valid username." };
  return { isValid: true, message: "" };
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return { isValid: false, message: "This field is required." };
  if (!emailRegex.test(email))
    return { isValid: false, message: "Please enter a valid email address." };
  return { isValid: true, message: "" };
};

export const validatePassword = (password) => {
  const minLength = 8;
  const maxLength = 20;
  const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;
  const uppercase = /[A-Z]/;
  const lowercase = /[a-z]/;
  const number = /[0-9]/;

  if (password.length < minLength || password.length > maxLength)
    return {
      isValid: false,
      message: "Password must be between 8 and 20 characters.",
    };

  if (!uppercase.test(password))
    return {
      isValid: false,
      message: "Password must contain at least one uppercase letter.",
    };

  if (!lowercase.test(password))
    return {
      isValid: false,
      message: "Password must contain at least one lowercase letter.",
    };

  if (!number.test(password))
    return {
      isValid: false,
      message: "Password must contain at least one number.",
    };

  if (!specialCharacters.test(password))
    return {
      isValid: false,
      message: "Password must contain at least one special character.",
    };

  return { isValid: true, message: "" };
};