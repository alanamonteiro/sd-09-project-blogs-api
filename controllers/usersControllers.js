const rescue = require('express-rescue');
const services = require('../services/usersService');
const userValidate = require('../middlewares/userValidate');
const emailValidate = require('../middlewares/validateEmail');
const validateLogin = require('../middlewares/validateLogin');
const validateToken = require('../middlewares/validateToken');

const createUsers = [
  userValidate,
  emailValidate.validateEmail,
  rescue(async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const userCreate = await services.createUsers({ displayName, email, password, image });
    return res.status(201).json({ token: userCreate });
  }),
];

const login = [
  validateLogin,
  emailValidate.existEmail,
  rescue(async (req, res) => {
    const { email, password } = req.body;

    const loginUser = await services.loginUsers({ email, password });
    // console.log('login', loginUser);
    return res.status(200).json({ token: loginUser });
  }),
];

const getAllUsers = [
  validateToken,
  rescue(async (req, res) => {
    const getUsers = await services.getAllUsersService();
    // console.log('controllers', getUsers);
    return res.status(200).json(getUsers);
  }),
];

module.exports = {
  createUsers,
  login,
  getAllUsers,
};