import Joi from 'joi'
import {
  MAX_LENGTH_24,
  MAX_LENGTH_255,
  MIN_LENGTH_6,
  MIN_LENGTH_8,
} from '@/constants/constants'

export const signUpSchema = Joi.object({
  email: Joi.string()
    .min(MIN_LENGTH_8)
    .max(MAX_LENGTH_255)
    .email()
    .required()
    .messages({
      'string.email': 'email.is_email',
      'string.min': 'email.min',
      'string.max': 'email.max',
      'string.empty': 'email.empty',
      'any.required': 'email.empty',
    }),
  username: Joi.string()
    .alphanum()
    .min(MIN_LENGTH_6)
    .max(MAX_LENGTH_24)
    .required()
    .messages({
      'string.min': 'username.min',
      'string.max': 'username.max',
      'string.empty': 'username.empty',
      'any.required': 'username.empty',
    }),
  password: Joi.string()
    .min(MIN_LENGTH_8)
    .max(MAX_LENGTH_24)
    .required()
    .messages({
      'string.min': 'password.min',
      'string.max': 'password.max',
      'string.empty': 'password.empty',
      'any.required': 'password.empty',
    }),
  birthday: Joi.date().max('now').required().messages({
    'date.base': 'birthday.base',
    'date.empty': 'birthday.empty',
    'date.max': 'birthday.max',
    'any.required': 'birthday.empty',
  }),
})

export const signInSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': 'email.is_email',
    'string.empty': 'email.empty',
    'any.required': 'email.empty',
  }),
  password: Joi.string().required().messages({
    'string.empty': 'password.empty',
    'any.required': 'password.empty',
  }),
})
