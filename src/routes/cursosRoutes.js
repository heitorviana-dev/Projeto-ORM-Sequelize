const { Router } = require('express');
const CursoController = require('../controllers/CursoController');

const router = new Router();

router.get('/cursos', CursoController.getCursos);
router.post('/cursos/create', CursoController.createCursos);
router.put('/cursos/update/:id', CursoController.updateCursos);
router.delete('/cursos/delete/:id', CursoController.deleteCursos);

module.exports = router;