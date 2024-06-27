import express from 'express';
import pessoasRoutes from './routes/pessoasRoutes';

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
    this.app.use(pessoasRoutes);
  }
}

export default new App().app;
