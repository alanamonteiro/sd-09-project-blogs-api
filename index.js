const express = require('express');
const validateJWT = require('./middlewares/validateJWT');
const User = require('./controllers/userController');
const Category = require('./controllers/categoryControllers');
const BlogPost = require('./controllers/blogPostControllers');
require('dotenv/config');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', User.addUser);
app.get('/user', validateJWT, User.getAllUsers);
app.get('/user/:id', validateJWT, User.getById);
app.delete('/user/me', validateJWT, User.deleteMe);
app.post('/login', User.login);

app.post('/categories', validateJWT, Category.addCategory);
app.get('/categories', validateJWT, Category.getAllCategories);

app.post('/post', validateJWT, BlogPost.addPost);
app.get('/post', validateJWT, BlogPost.getAllPosts);
app.get('/post/:id', validateJWT, BlogPost.getById);
app.put('/post/:id', validateJWT, BlogPost.updatePost);
app.delete('/post/:id', validateJWT, BlogPost.deletePost);
