import { Router } from 'express';
import PessoaController from '../controllers/PessoaController';

const router = Router();

router.get('/pessoas', PessoaController.getAll);

export default router;