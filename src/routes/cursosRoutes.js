const { Router } = require('express');
const CursoController = require('../controllers/CursoController');

const router = new Router();

router.get('/cursos', CursoController.getCursos);

module.exports = router;