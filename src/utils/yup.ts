import * as yup from 'yup';

export const emailValidator = yup
  .string()
  .email('must specify a valid email')
  .required('must specify an email');

export const passwordValidator = yup
  .string()
  .required('must specify a password')
  .min(6, 'must specify password between 6 and 128 characters')
  .max(128, 'must specify password between 6 and 128 characters');
