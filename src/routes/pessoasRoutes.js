const { Router } = require('express');
const pessoaController = require('../controllers/PessoaController.js');

const router = Router();

router.get('/pessoas', async(req, res) => await pessoaController.getAll(req, res));

module.exports = router;