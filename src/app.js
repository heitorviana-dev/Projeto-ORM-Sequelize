import express from 'express';
import pessoasRoutes from './routes/pessoasRoutes';
import cursoRoutes from './routes/cursosRoutes';
import matriculaRoutes from './routes/matriculasRoutes';
import categoriasRoutes from './routes/categoriasRoutes';

class App{
  constructor(){
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  routes(){
    this.app.use(pessoasRoutes);
    this.app.use(cursoRoutes);
    this.app.use(matriculaRoutes);
    this.app.use(categoriasRoutes);
  }
}

export default new App().app;
