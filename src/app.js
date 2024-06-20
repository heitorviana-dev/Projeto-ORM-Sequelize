import express from 'express';

class App{
  constructor(){
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.app.use(express.json());
  }

  routes(){
    this.app.get('/teste', (req, res) => {
      res
        .status(200)
        .send({ mensagem: 'boas-vindas à API' });
    });

  }
}

export default new App().app;
