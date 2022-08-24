import * as Yup from "yup";
import { INVALID_EMAIL_ERROR_MESSAGE, REQUIRED_ERROR_MESSAGE, INVALID_NUMBER_TYPE_ERROR_MESSAGE } from "./form-error-message";
import { PREFECTURES } from "../../../appConfig";

const NUMBER_REGEX = /^[0-9]*$/;

export const EMAIL_SCHEMA = Yup
    .string()
    .typeError(INVALID_EMAIL_ERROR_MESSAGE)
    .required(REQUIRED_ERROR_MESSAGE)
    .email(INVALID_EMAIL_ERROR_MESSAGE);

export const PASSWORD_SCHEMA = Yup
    .string()
    .required(REQUIRED_ERROR_MESSAGE)
    .min(7, "Please input at least 7 characters.")
    .max(30, "Please input less than 30 characters.");

export const CONFIRM_PASSWORD_SCHEMA = Yup
    .string()
    .oneOf([Yup.ref("password"), null], "Password must match.");

export const NAME_SCHEMA = Yup
    .string()
    .required(REQUIRED_ERROR_MESSAGE)
    .max(50, "Please input less than 50 characters.");

export const OTP_SCHEMA = Yup
    .string()
    .required(REQUIRED_ERROR_MESSAGE)
    .matches(NUMBER_REGEX, INVALID_NUMBER_TYPE_ERROR_MESSAGE)
    .length(6, "Please input ${length} digits only.");

export const STRING_REQUIRED_SCHEMA = Yup
    .string()
    .required(REQUIRED_ERROR_MESSAGE);

export const POST_CODE_SCHEMA = Yup
    .string()
    .required(REQUIRED_ERROR_MESSAGE)
    .matches(NUMBER_REGEX, INVALID_NUMBER_TYPE_ERROR_MESSAGE)
    .length(7, "Please input ${length} digits only.");

export const PREFECTURE_SCHEMA = Yup
    .string()
    .required(REQUIRED_ERROR_MESSAGE)
    .oneOf(PREFECTURES, "Please input valid prefecture.");

export const PHONE_NUMBER_SCHEMA = Yup
    .string()
    .matches(NUMBER_REGEX, INVALID_NUMBER_TYPE_ERROR_MESSAGE)
    .max(11, "Phone number must be at most ${max} digits.")
    .required(REQUIRED_ERROR_MESSAGE);