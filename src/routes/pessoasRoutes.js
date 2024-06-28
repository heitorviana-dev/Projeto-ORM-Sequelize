const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const router = Router();

router.get('/pessoas', PessoaController.getPessoas);
router.post('/pessoas/create', PessoaController.createPessoas);
router.put('/pessoas/update/:id', PessoaController.updatePessoa);
router.delete('/pessoas/delete/:id', PessoaController.deletePessoa);

module.exports = router;