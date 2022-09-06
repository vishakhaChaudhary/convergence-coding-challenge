// helper
import { yupHelper } from "../../../../lib/helpers";
// constant
import { constant } from "../../../../lib/constant/constant";
import {
  emailSchema,
  passwordSchema,
  confirmationPasswordSchema,
  dobSchemba,
  genderSchema,
} from "./schema";

const { validateValue, handlePromiseError } = yupHelper;
const { EMAIL, PASSWORD, CONFIRM_PASSWORD, GENDER, DATE_OF_BIRTH } = constant;

const validate = async (field, value) => {
  let promise = "";
  switch (field) {
    case EMAIL:
      promise = validateValue(emailSchema(), { email: value });
      break;
    case PASSWORD:
      promise = validateValue(passwordSchema(), { password: value });
      break;
    case CONFIRM_PASSWORD:
      promise = validateValue(confirmationPasswordSchema(), {
        password: value.password,
        confirm_password: value.confirm_password,
      });
      break;
    case DATE_OF_BIRTH:
      promise = validateValue(dobSchemba(), { dob: value });
      break;
    case GENDER:
      promise = validateValue(genderSchema(), { gender: value });
      break;
    default:
      return "";
  }
  return handlePromiseError(promise);
};

export default validate;
