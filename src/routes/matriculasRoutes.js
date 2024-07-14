const { Router } = require('express');
const MatriculaController = require('../controllers/MatriculaController');

const router = Router();

router.get('/matriculas', MatriculaController.lerMatriculas);
router.post('/matriculas/create', MatriculaController.criarMatricula);

module.exports = router;