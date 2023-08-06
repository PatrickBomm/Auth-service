const express = require('express');
const authController = require('./controllers/authController');
const authRouter = require('./routes/authRouter');

class App {
  constructor() {
    this.app = express();
    this.setupMiddleware();
    this.setupRoutes();
  }

  setupMiddleware() {
    this.app.use(express.json());
    app.use('/auth', authRouter);
  }

  setupRoutes() {
    this.app.post('/login', authController.login);
    this.app.post('/register', authController.register);
  }

  start(port) {
    this.app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  }
}

module.exports = App;