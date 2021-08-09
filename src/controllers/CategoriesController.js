const express = require('express');
const CategoryService = require('../services/CategoriesService');
const { HTTP_CREATED_STATUS } = require('../helpers/statusProtocoloHTTP');
const { validateDataCategory } = require('../middlewares/validateCategory');
const { validateToken } = require('../middlewares/validateToken');

const categoryRoute = express.Router();

categoryRoute.post('/', validateToken, validateDataCategory,
 async (req, res, next) => {
  const { name } = req.body;
try {
  const category = await CategoryService.createCategory(name);
  return res.status(HTTP_CREATED_STATUS).json(category);
} catch (error) {
  return next(error);
}
});

module.exports = categoryRoute;