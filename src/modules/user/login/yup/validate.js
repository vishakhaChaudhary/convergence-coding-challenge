import { emailSchema, passwordSchema } from "./schema";
import { yupHelper } from "../../../../lib/helpers";
import { constant } from "../../../../lib/constant/constant";

const { validateValue, handlePromiseError } = yupHelper;
const { EMAIL, PASSWORD } = constant

const validate = async (field, value) => {
  let promise = "";
  switch (field) {
    case EMAIL:
      promise = validateValue(emailSchema(), { email: value });
      break;
    case PASSWORD:
      promise = validateValue(passwordSchema(), { password: value });
      break;
    default:
      return "";
  }
  return handlePromiseError(promise);
};

export default validate;
