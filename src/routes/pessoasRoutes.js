import { Router } from 'express';
import PessoaController from '../controllers/PessoaController';

const router = Router();

router.get('/pessoas', PessoaController.getPessoas);
router.post('/pessoas/create', PessoaController.createPessoas);
router.put('/pessoas/update/:id', PessoaController.updatePessoaPorId);
router.delete('/pessoas/delete/:id', PessoaController.deletePessoaPorId);

export default router;