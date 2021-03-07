const ValidationErrors = {
  REQUIRED: "required",
  NOT_VALID: "notvalid",
  MINIMUM_LENGTH: "minlength",
  /* ... */
};

const validatorErrors = (err) => {
  let errMessage = {};
  for (let errName in err.errors) {
    if (err.errors[errName].kind === ValidationErrors.REQUIRED) {
      errMessage[errName] = {
        message: `The ${errName} field is required`,
      };
    }
    if (err.errors[errName].kind === ValidationErrors.MINIMUM_LENGTH) {
      errMessage[errName] = {
        message: `The ${errName} field requires a minumum length of ${err.errors[errName].properties.minlength}`,
      };
    }
  }
  return errMessage;
};

export { validatorErrors };
