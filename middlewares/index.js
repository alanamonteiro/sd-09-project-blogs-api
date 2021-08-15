const checkDisplayName = require('./checkDisplayname');
const checkEmail = require('./checkEmail');
const checkIfUserEmailAlreadyExist = require('./checkIfUserEmailAlreadyExist');
const checkPassword = require('./checkPassword');
const tokenGenerator = require('./tokenGenerator');
const tokenValidation = require('./tokenValidation');
const checkLogin = require('./checkLogin');
const checkCategoryId = require('./checkCategoryId');
const checkTitleAndContent = require('./checkTitleAndContent');

module.exports = { 
  checkDisplayName,
  checkEmail,
  checkIfUserEmailAlreadyExist,
  checkPassword,
  tokenGenerator,
  tokenValidation,
  checkLogin,
  checkCategoryId,
  checkTitleAndContent,
  };
