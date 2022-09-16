import * as Yup from "yup";
import { INVALID_EMAIL_ERROR_MESSAGE, REQUIRED_ERROR_MESSAGE, INVALID_NUMBER_TYPE_ERROR_MESSAGE, INVALID_BOOLEAN_TYPE_ERROR_MESSAGE, INTEGER_NUMBER_ERROR_MESSAGE, POSITIVE_NUMBER_ERROR_MESSAGE } from "./form-error-message";
import { CURRENT_TIME, PREFECTURES } from "../../../appConfig";

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
    .required(REQUIRED_ERROR_MESSAGE)
    .oneOf([Yup.ref("password"), null], "Password must match.");

export const CONFIRM_NEW_PASSWORD_SCHEMA = Yup
    .string()
    .required(REQUIRED_ERROR_MESSAGE)
    .oneOf([Yup.ref("newPassword"), null], "Password must match.");

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
    .required(REQUIRED_ERROR_MESSAGE)
    .matches(NUMBER_REGEX, INVALID_NUMBER_TYPE_ERROR_MESSAGE)
    .length(11, "Phone number must be ${length} digits.")

export const CREDIT_CARD_TYPE_SCHEMA = Yup
    .string()
    .required(REQUIRED_ERROR_MESSAGE)
    .oneOf(["mastercard", "visa"], "Please input valid credit card type.");

export const EXPIRATION_DATE_SCHEMA = Yup
    .date()
    .required(REQUIRED_ERROR_MESSAGE)
    .min(Date(CURRENT_TIME - 24 * 60 * 60 * 1000), "Please enter date in the future.");

export const CREDIT_CARD_NUMBER_SCHEMA = Yup
    .string()
    .required(REQUIRED_ERROR_MESSAGE)
    .matches(NUMBER_REGEX, INVALID_NUMBER_TYPE_ERROR_MESSAGE)
    .length(16, "Please enter ${length} digits only.");

export const BOOLEAN_SCHEMA = Yup
    .boolean()
    .typeError(INVALID_BOOLEAN_TYPE_ERROR_MESSAGE);

export const REVIEW_SCHEMA = Yup
    .string()
    .required(REQUIRED_ERROR_MESSAGE)
    .max(1500, "Please input less than ${max} characters.");

export const REVIEW_RATING_SCHEMA = Yup
    .number()
    .min(0.5, "The least amount you can input is 0.5.")
    .max(5, "The most amount you can input is 5.");

export const SELECT_AMOUNT_SCHEMA = Yup
    .number()
    .typeError(INVALID_NUMBER_TYPE_ERROR_MESSAGE)
    .required(REQUIRED_ERROR_MESSAGE)
    .integer(INTEGER_NUMBER_ERROR_MESSAGE)
    .positive(POSITIVE_NUMBER_ERROR_MESSAGE)
    .max(5, "You cannot buy more than ${max} items.");

export const POINT_SCHEMA = Yup
    .number()
    .typeError(INVALID_NUMBER_TYPE_ERROR_MESSAGE)
    .required(REQUIRED_ERROR_MESSAGE)