import Joi from "joi";

export const LoginSchema = Joi.object({
  email: Joi.string()
    .max(50)
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": `Please enter email address`,
      "string.email": `Please enter valid email address`,
      "string.max": `Email must be maximum 50 characters!`,
    }),
  password: Joi.string().min(6).required().messages({
    "string.empty": `Please enter password`,
    "string.min": `Password must be minimum 6 characters!`,
  }),
});
