import express from 'express';
import pessoasRoutes from './routes/pessoasRoutes';
import cursoRoutes from './routes/cursosRoutes';

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
    this.app.use(cursoRoutes);
  }
}

export default new App().app;
