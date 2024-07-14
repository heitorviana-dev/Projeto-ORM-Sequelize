const { Router } = require('express');
const MatriculaController = require('../controllers/MatriculaController');

const router = Router();

router.get('/matriculas', MatriculaController.lerMatriculas); // Get
router.post('/matriculas/create', MatriculaController.criarMatricula); // Post
router.put('/matriculas/update/:id', MatriculaController.updateMatricula); // Update
router.delete('/matriculas/delete/:id', MatriculaController.deleteMatricula); // Delete

module.exports = router;