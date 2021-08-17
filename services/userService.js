const joi = require('joi');
const { User } = require('../models');
const { messages, codes, objectError } = require('../util/responseHandling');
const { createToken } = require('../util/tokenGenerate');

const userValidator = joi.object({
  displayName: joi.string().min(8).required(),
  email: joi.string().email().required(),
  password: joi.string().length(6).required(),
  image: joi.string(),
});

const createUser = async (displayName, email, password, image) => {
  const { error } = userValidator.validate({ displayName, email, password, image });
  if (error) return objectError(error.details[0].message, codes.CODE_400);

  const userExists = await User.findOne({ where: { email } });
  if (userExists) return objectError(messages.USER_ALREADY_EXISTS, codes.CODE_409);

  await User.create({ displayName, email, password, image });
  return createToken({ displayName, email, password, image });
};

module.exports = { createUser };