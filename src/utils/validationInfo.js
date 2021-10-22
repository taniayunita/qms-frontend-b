export default function validateInfo(emailReg, passwordReg, passwordConfirmReg) {
  const errors = {};
  if (!emailReg) {
    errors.emailReg = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(emailReg)) {
    errors.emailReg = "Email address is invalid";
  }
  if (!passwordReg) {
    errors.passwordReg = "Password is required";
  } else if (passwordReg < 6) {
    errors.passwordReg = "Password needs to be 6 characters or more";
  }

  if (!passwordConfirmReg) {
    errors.passwordConfirmReg = "Password is required";
  } else if (passwordConfirmReg !== passwordReg) {
    errors.passwordConfirmReg = "Passwords do not match";
  }
  return errors;
}
