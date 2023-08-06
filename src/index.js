const App = require('./app');

class Index {
  constructor() {
    this.port = process.env.PORT || 3000;
    this.app = new App();
  }

  start() {
    this.app.start(this.port);
  }
}

module.exports = Index;
