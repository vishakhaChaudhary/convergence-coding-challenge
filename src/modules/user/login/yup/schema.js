import * as yup from "yup";
import { yupHelper } from "../../../../lib/helpers";
import { cms } from "../../../../lib/constant/constant";

const { emailRegex, loginPasswordRegex } = yupHelper;
const { message } = cms;

const emailSchema = () =>
  yup.object().shape({
    email: yup
      .string()
      .required(message.error.required.email)
      .matches(emailRegex, message.error.invalid.email),
  });

const passwordSchema = () =>
  yup.object().shape({
    password: yup
      .string()
      .required(message.error.required.password)
      .matches(loginPasswordRegex, message.error.invalid.loginPassword),
  });

export { emailSchema, passwordSchema };