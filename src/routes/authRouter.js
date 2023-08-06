const express = require('express');
const authController = require('../controllers/authController');
const authenticate = require('../middlewares/authenticate');


const authRouter = express.Router();

authRouter.post('/login', authController.login);
authRouter.post('/register', authController.register);
authRouter.get('/list', authenticate, authController.getUsers);

module.exports = authRouter;
