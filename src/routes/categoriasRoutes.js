const { Router } = require('express');
const CategoriaController = require('../controllers/CategoriaController');

const router = Router();

router.get('/categorias', CategoriaController.lerCategorias);
router.post('/categorias/create', CategoriaController.criarCategoria);
router.put('/categorias/update/:id', CategoriaController.atualizarCategoria);
router.delete('/categorias/delete/:id', CategoriaController.deletarCategoria);

module.exports = router;