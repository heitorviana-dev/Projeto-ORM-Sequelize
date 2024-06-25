import { Router } from 'express';
import CursoController from '../controllers/CursoController';

const router = Router();

router.get('/cursos', CursoController.getCursos);

export default router;