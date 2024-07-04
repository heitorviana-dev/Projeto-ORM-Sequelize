const { Router } = require('express');
const CursoController = require('../controllers/CursoController');

const router = new Router();

router.get('/cursos', CursoController.getCursos);
router.post('/cursos/create', CursoController.createCursos);

module.exports = router;