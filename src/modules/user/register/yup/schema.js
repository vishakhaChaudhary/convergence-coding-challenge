import * as yup from "yup";
import { yupHelper } from "../../../../lib/helpers";
import { cms } from "../../../../lib/constant/constant";

const { emailRegex, passwordRegex } = yupHelper;
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
      .max(12, message.error.maxPasswordLength)
      .matches(passwordRegex, message.error.invalid.password),
  });

const confirmationPasswordSchema = () =>
  yup.object().shape({
    confirm_password: yup
      .string()
      .required(message.error.required.confirmPassword)
      .oneOf(
        [yup.ref("password"), null],
        message.error.invalid.confirmPassword
      ),
  });

const dobSchemba = () =>
  yup.object().shape({
    dob: yup.string().required(message.error.required.dob),
  });

const genderSchema = () =>
  yup.object().shape({
    gender: yup.string().required(message.error.required.gender),
  });

export { emailSchema, passwordSchema, confirmationPasswordSchema, dobSchemba, genderSchema };
