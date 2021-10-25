import Joi from "joi";

const validatePost = {
  body: Joi.object({
    post: Joi.string().min(1).required(),
  }).required(),
};

const validateComment = {
  body: Joi.object({
    comment: Joi.string().min(1).required(),
  }).required(),
};

const validateId = {
  params: Joi.object({
    postId: Joi.string().required()
      .empty().guid({ version: "uuidv4" })
  }).required(),
};

export { validatePost, validateId, validateComment };
