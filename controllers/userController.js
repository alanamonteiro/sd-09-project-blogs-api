const jwt = require('jsonwebtoken');
const status = require('../statusCode/status');
const userServices = require('../services/userService');

const secret = 'trybe-t9';

const createUser = async (req, res) => {
  const bodyReq = req.body;
  const result = await userServices.createUser(bodyReq);
  if (!result.message) {
    const token = jwt.sign({ result }, secret, {
      expiresIn: '1h', algorithm: 'HS256',
    });
    return res.status(status.CREATE).json({ token });
  }
  if (result.message === 'User already registered') {
    return res.status(status.USER_EXIST).json(result);
  }
  return res.status(status.BAD_REQUEST).json(result);
};

const getAll = async (req, res) => {
  const result = await userServices.getAll();
  return res.status(status.OK).json(result);
};

const getById = async (req, res) => {
  const { id: idReq } = req.params;
  const result = await userServices.getById(idReq);
  if (result) {
    const { id, displayName, email, image } = result;
    return res.status(status.OK).json({ id, displayName, email, image });
  }
  return res.status(status.NOT_FOUND).json(status.USER_NOT_EXIST);
};

module.exports = {
  createUser,
  getAll,
  getById,
};
