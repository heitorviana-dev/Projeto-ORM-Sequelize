import { Router } from 'express';
import PessoaController from '../controllers/PessoaController';

const router = Router();

router.get('/pessoas', PessoaController.get);

export default router;