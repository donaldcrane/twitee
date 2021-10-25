const Joi = require("joi");

const userValidation = {
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
  }).required(),
};

export default { userValidation };
